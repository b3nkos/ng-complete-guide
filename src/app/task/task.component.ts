import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  userName: string;
  showResetUserNameButton: boolean;

  constructor() {
    this.userName = 'Initial user name';
    this.showResetUserNameButton = true;
  }

  ngOnInit(): void {
  }

  onHandleChangeUserNameInput(): void {
    this.showResetUserNameButton = this.userName.trim().length > 0;
  }

  onHandleClick(): void {
    this.userName = '';
    this.showResetUserNameButton = false;
  }

}
