import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';

  onIntervalFired(event: number) {
    if (event % 2 == 0) {
      this.evenNumber.push(event)
    } else {
      this.oddNumber.push(event)
    }
  }

  oddNumber: number[] = [];
  evenNumber: number[] = [];
}
