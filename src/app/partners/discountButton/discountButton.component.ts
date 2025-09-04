import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-discount-button',
  standalone: true,
  imports: [],
  templateUrl: './discountButton.component.html'
})
export class DiscountButtonComponent {

  url = input<string>('');     
 }
