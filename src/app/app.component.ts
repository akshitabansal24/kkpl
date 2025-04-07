import { Component , HostListener, AfterViewInit} from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeroComponent } from "./home/hero/hero.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutDetailedComponent } from "./about-detailed/about-detailed.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {

  title = 'kkpl';
  
  // ngAfterViewInit() {
  //   this.checkScroll(); // Check on load
  // }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   this.checkScroll();
  // }

  // checkScroll() {
  //   const navbar = document.querySelector('.navbar');
  //   if (!navbar) return; 

  //   if (window.scrollY > window.innerHeight - 100) {
  //     navbar.classList.add("navbar-scrolled");
  //   } else {
  //     navbar.classList.remove("navbar-scrolled");
  //   }
  // }

  isHomePage: boolean = true;

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.url === '/home'; // Adjust based on your home page route
        this.checkScroll(); // Apply styles immediately on route change
      }
    });
  }

  ngAfterViewInit() {
    this.checkScroll(); // Check on load
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (!this.isHomePage || window.scrollY > window.innerHeight - 100) {
      navbar.classList.add("navbar-scrolled"); // Solid navbar for other pages or when scrolled
    } else {
      navbar.classList.remove("navbar-scrolled"); // Transparent navbar only on the home page
    }
  }
}