import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flame-proof',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './flame-proof.component.html',
  styleUrl: './flame-proof.component.css'
})
export class FlameProofComponent {
  selectedFilter: string = 'flame-proof-fabrics'; // Default selection

  filterDiv(filter: string) {
    this.selectedFilter = filter;
    this.updateActiveClass(filter);
  }

  updateActiveClass(filter: string) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      const text = btn.textContent?.trim().toLowerCase();
      const match = (
        (filter === 'flame-proof-fabrics' && text?.includes('flame')) ||
        (filter === 'types-fr' && text?.includes('types')) ||
        (filter === 'applications' && text?.includes('applications')) ||
        (filter === 'making-wool-serge' && text?.includes('making'))
      );
      if (match) {
        btn.classList.add('is_active');
      } else {
        btn.classList.remove('is_active');
      }
    });
  }

  selectedSubFilter: string = 'cotton'; // Default selection

  selectSubFilter(filter: string) {
    this.selectedSubFilter = filter;
    this.updateActiveClass2(filter);
  }

  updateActiveClass2(filter: string) {
    const buttons = document.querySelectorAll('.sub-filter-btn');
    buttons.forEach(btn => {
      const text = btn.textContent?.trim().toLowerCase();
      const match = (
        (filter === 'cotton' && text?.includes('cotton')) ||
        (filter === 'wool' && text?.includes('wool')) ||
        (filter === 'polyester' && text?.includes('polyester'))
      );
      if (match) {
        btn.classList.add('is_active');
      } else {
        btn.classList.remove('is_active');
      }
    });
  }
}
