import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  userInput: number | null = null;
  result: number | null = null;

  calculateValueAtIndex(): void {
    if (this.userInput !== null && this.userInput >= 1) {
      const index = this.userInput;

      if (index === 1) {
        this.result = 2;
      } else if (index >= 2) {
        if (index % 2 === 0) {
          this.result = index * (index / 2) + 1;
        } else {
          this.result = (index - 1) * ((index - 1) / 2) + index;
        }
      }
    } else {
      this.result = null;
    }
  }
}
