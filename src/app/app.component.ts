import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  eventNumbers: number[] = [];

  onintervalFires(firednumber: number) {
    if (firednumber % 2 !== 0) {
      this.oddNumbers.push(firednumber);
    } else {
      this.eventNumbers.push(firednumber);
    }
  }
}
