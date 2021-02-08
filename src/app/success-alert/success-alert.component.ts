import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>Success alert component</p>',
  styles: [
    `p {
      font-size: 3em;
      font-weight: bold;
      color: blue;
    }`
  ]
})
export class SuccessAlertComponent implements OnInit {
  ngOnInit(): void {
  }

}
