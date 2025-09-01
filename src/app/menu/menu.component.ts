import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, UpperCasePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, UpperCasePipe, NgClass],
  templateUrl: './menu.component.html',
styleUrl: './menu.components.css',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  menuItems = [
    { label: 'inicio', link: '/' },
    { label: 'Quién soy', link: '/sobre-mi' },
    { label: 'Patrocinadores', link: '/partners' },
    { label: 'Servicios', link: '/servicios' },
    { label: 'Contacto', link: '/contacto' }
  ];

  menuOpen = false;
}
