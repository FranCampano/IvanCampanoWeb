import { Component } from '@angular/core';
import { DiscountButtonComponent } from "./discountButton/discountButton.component";

@Component({
  selector: 'servicios',
  standalone: true,
  imports: [DiscountButtonComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
Esn:string = 'https://es.esn.com/?utm_source=instagram&utm_medium=influencer&utm_campaign=ivan';
Sbd:string = 'https://sbdapparel.es/productos';
}
