import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, CarouselComponent, ProductsComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
