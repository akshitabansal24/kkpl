import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stoles',
  imports: [RouterLink],
  templateUrl: './stoles.component.html',
  styleUrl: './stoles.component.css'
})
export class StolesComponent {
  selectedFilter: string = 'pashminas'; // Default selection

  filterDiv(filter: string) {
    this.selectedFilter = filter;
    this.updateActiveClass(filter);
  }

  updateActiveClass(filter: string) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      const text = btn.textContent?.trim().toLowerCase();
      const match = (
        (filter === 'pashminas' && text?.includes('pashminas')) ||
        (filter === 'making' && text?.includes('making')) ||
        (filter === 'wool' && text?.includes('wool')) ||
        (filter === 'silk' && text?.includes('silk')) ||
        (filter === 'designs' && text?.includes('designs')) ||
        (filter === 'care' && text?.includes('care'))
      );
      if (match) {
        btn.classList.add('is_active');
      } else {
        btn.classList.remove('is_active');
      }
    });
  }
}
