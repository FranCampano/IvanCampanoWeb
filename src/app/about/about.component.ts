import { NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  activeIndex = 0;
  timelineItems = [
    { id: 0, text: 'First Macintosh computer' },
    { id: 1, text: 'iMac' },
    { id: 2, text: 'iPod' },
    { id: 3, text: 'iPhone' },
    { id: 4, text: 'Apple Watch' },
  ];

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    const carouselEl = this.carousel.nativeElement;

    carouselEl.addEventListener('slide.bs.carousel', (event: any) => {
      this.zone.run(() => {
        this.activeIndex = event.to;
      });
    });
  }
}
