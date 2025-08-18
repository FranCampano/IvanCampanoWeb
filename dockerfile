# -----------------------------
# Stage 1: Build Angular App
# -----------------------------
FROM node:20-alpine AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Build de producción
RUN npm run build -- --configuration production

# -----------------------------
# Stage 2: Servir con Nginx
# -----------------------------
FROM nginx:alpine

# Elimina el index.html por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos compilados de Angular al directorio de Nginx
COPY --from=build /app/dist/ivan-campano-web /usr/share/nginx/html

# Copia la configuración de Nginx si quieres personalizar (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
