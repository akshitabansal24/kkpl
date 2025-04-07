import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../home/about/about.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-detailed',
  imports: [RouterLink, AboutComponent],
  templateUrl: './about-detailed.component.html',
  styleUrl: './about-detailed.component.css'
})
export class AboutDetailedComponent {
  selectedFilter: string = 'profile'; // Default selection

  filterDiv(filter: string) {
    this.selectedFilter = filter;
    this.updateActiveClass(filter);
  }

  updateActiveClass(filter: string) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      if (btn.textContent?.trim() === (filter === 'profile' ? 'Company Profile' : 'Certifications')) {
        btn.classList.add('is_active');
      } else {
        btn.classList.remove('is_active');
      }
    });
  }
}
