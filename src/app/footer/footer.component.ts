import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  menuItems = [
    { label: 'Quién soy', link: '/sobre-mi' },
    { label: 'Patrocinadores', link: '/partners' },
    { label: 'Servicios', link: '/servicios' },
    { label: 'Contacto', link: '/contacto' }
  ];
}
