import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  cimages=[
    {
      id:1,
      alt:'tata',
      src:'https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D'
    },
    {
      id:2,
      alt:'amazon',
      src:'https://w0.peakpx.com/wallpaper/842/231/HD-wallpaper-taj-mahal-india-tajmahal-tourism-india-asia-landmarks-mist.jpg'
    },
    {
      id:3,
      alt:'google',
      src:'https://c1.wallpaperflare.com/preview/146/987/717/architecture-old-travel-city-sky-tourism.jpg'
    }
    
  ]
}
