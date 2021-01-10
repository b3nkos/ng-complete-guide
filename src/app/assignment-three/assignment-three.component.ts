import {Component} from '@angular/core';

@Component({
  selector: 'app-assigment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent {
  showParagraph = false;
  logs = [];
  logId = 1;

  onHandleClick(): void {
    this.showParagraph = !this.showParagraph;
    this.logs.push({
      id: this.logId,
      data: Date.now()
    });
    this.logId++;
  }
}
