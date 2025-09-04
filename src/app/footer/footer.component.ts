import { style } from '@angular/animations';
import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor,UpperCasePipe],
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './footer.component.css',

})
export class FooterComponent {
  menuItems = [
    { label: 'Quién soy', link: '/sobre-mi' },
    { label: 'Patrocinadores', link: '/partners' },
    { label: 'Servicios', link: '/servicios' },
    { label: 'Contacto', link: '/contacto' }
  ];

  links = [
    { label: 'Instagram', url: 'https://www.instagram.com/ivan0116/#' },
    { label: 'YouTube', url: 'https://www.youtube.com/@ivancampanodiaz/videos' }
  ];
}
