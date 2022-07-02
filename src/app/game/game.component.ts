import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counterSent: number = 0
  interval
  @Output() intervalFired = new EventEmitter<number>()

  onClickStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counterSent)
      this.counterSent++
    }, 1000)
  }

  onClickEnd() {
    clearInterval(this.interval)
  }


}
