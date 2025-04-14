import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-handlooms',
  imports: [RouterLink],
  templateUrl: './handlooms.component.html',
  styleUrl: './handlooms.component.css'
})
export class HandloomsComponent {
  selectedFilter: string = 'handlooms'; // Default selection

  filterDiv(filter: string) {
    this.selectedFilter = filter;
    this.updateActiveClass(filter);
  }

  updateActiveClass(filter: string) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      const text = btn.textContent?.trim().toLowerCase();
      const match = (
        (filter === 'handlooms' && text?.includes('handlooms')) ||
        (filter === 'designs' && text?.includes('designs'))
      );
      if (match) {
        btn.classList.add('is_active');
      } else {
        btn.classList.remove('is_active');
      }
    });
  }
}
