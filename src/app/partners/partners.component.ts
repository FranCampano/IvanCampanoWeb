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

}
