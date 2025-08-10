import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuItems = [
    { label: 'Inicio', link: '/' },
    { label: 'Quién soy', link: '/sobre-mi' },
    { label: 'Patrocinadores', link: '/partners' },
    { label: 'Servicios', link: '/servicios' },
    { label: 'Contacto', link: '/contacto' }
  ];

}
