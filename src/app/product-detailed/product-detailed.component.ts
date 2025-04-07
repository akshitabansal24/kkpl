import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detailed',
  imports: [RouterLink],
  templateUrl: './product-detailed.component.html',
  styleUrl: './product-detailed.component.css'
})
export class ProductDetailedComponent {
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
