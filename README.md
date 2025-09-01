# Ivan Campano Web - Guía de Construcción y Prueba Local

Este documento explica cómo construir, configurar y ejecutar la aplicación Angular `ivan-campano-web` usando Docker y Nginx en un entorno local.

---

## 1. Requisitos Previos

- Node.js >= 20 (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- npm >= 9
- Docker
- Angular CLI

---

## 2. Configuración del Proyecto Angular

Si aún no tienes `package.json` completo:

1. Genera uno básico:

```bash
npm init -y
```

2. Instala dependencias necesarias:

```bash
npm install @angular/core @angular/cli rxjs zone.js
```

3. (Opcional) Declara versión de Node y npm en `package.json`:

```json
"engines": {
  "node": ">=20.0.0 <21.0.0",
  "npm": ">=9.0.0"
}
```

4. Construye el proyecto para producción con `base-href` correcto:

```bash
npm run build -- --configuration production --base-href /
```

> Si vas a servir la app en una subruta, por ejemplo `/browser/`, usa `--base-href /browser/`.

---

## 3. Dockerfile Multi-Stage

Archivo `Dockerfile` optimizado:

```dockerfile
# Stage 1: Build Angular App
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production --base-href /

# Stage 2: Servir con Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ivan-campano-web /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 4. Configuración Nginx (`nginx.conf`)

Archivo `nginx.conf` recomendado para Angular SPA:

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    # Sirve archivos existentes, rutas SPA van a index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Evita rewrite en carpetas especiales (.well-known)
    location ^~ /.well-known/ {
        allow all;
    }

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;
}
```

---

## 5. Construcción de la Imagen Docker

```bash
docker build -t ivan-app .
```

---

## 6. Ejecutar el Contenedor

Para levantar la app en segundo plano:

```bash
docker run -d -p 80:80 --name ivan-app ivan-app
```

---

## 7. Ver Logs de la Aplicación

- Para seguir logs en tiempo real:

```bash
docker logs -f ivan-app
```

- Para limitar el número de líneas:

```bash
docker logs -f --tail 100 ivan-app
```

- Para ver logs de Nginx dentro del contenedor:

```bash
docker exec -it ivan-app tail -f /var/log/nginx/error.log
```

---

## 8. Probar la Aplicación Localmente

Abre un navegador y visita:

```
http://localhost/
```

> Si configuraste `--base-href /browser/`, visita `http://localhost/browser/`.

---

## 9. Notas Adicionales

- Siempre reconstruye la imagen Docker cuando cambies código o dependencias.
- Ajusta `base-href` según la ruta donde la app será servida.
- La configuración de Nginx evita ciclos de redirección y asegura que rutas SPA funcionen correctamente.
- Para instalaciones reproducibles en producción, considera usar `npm ci` en lugar de `npm install` en el Dockerfile.
- Recuerda limpiar el cache de navegacion para ver tus cambios reflejados chrome Windows (ctrl + F5).

---

Con esto, tu aplicación Angular puede construirse, desplegarse y probarse **completamente local usando Docker**.

