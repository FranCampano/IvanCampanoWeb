import { NgFor, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor,UpperCasePipe ],
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

}
