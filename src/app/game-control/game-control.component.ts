import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval: number;
  outputNumber = 0;

  @Output()
  numberGenerated = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.numberGenerated.emit(this.outputNumber++);
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }
}
