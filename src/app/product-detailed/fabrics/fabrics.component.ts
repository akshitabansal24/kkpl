import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fabrics',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './fabrics.component.html',
  styleUrl: './fabrics.component.css'
})
export class FabricsComponent {
  selectedFilter: string = 'printed-fabrics'; // Default selection

  filterDiv(filter: string) {
    this.selectedFilter = filter;
    this.updateActiveClass(filter);
  }

  updateActiveClass(filter: string) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      const text = btn.textContent?.trim().toLowerCase();
      const match = (
        (filter === 'printed-fabrics' && text?.includes('printed')) ||
        (filter === 'custom-wool' && text?.includes('wool')) ||
        (filter === 'colour-chart' && text?.includes('colour')) ||
        (filter === 'metric-conversion' && text?.includes('metric'))
      );
      if (match) {
        btn.classList.add('is_active');
      } else {
        btn.classList.remove('is_active');
      }
    });
  }

  units = ['inch', 'cm', 'm', 'feet', 'yard'];
  fromUnit = 'cm';
  inputValue: number = 1;

  conversionRates: { [key: string]: number } = {
    'inch': 1,
    'cm': 2.54,
    'm': 0.0254,
    'feet': 1 / 12,
    'yard': 1 / 36
  };

  getConvertedValues(): { unit: string, value: number }[] {
    const valueInInch = this.inputValue / this.conversionRates[this.fromUnit];
    return this.units.map(unit => ({
      unit,
      value: parseFloat((valueInInch * this.conversionRates[unit]).toFixed(4))
    }));
  }
}
