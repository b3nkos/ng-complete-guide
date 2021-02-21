import {Component, OnInit} from '@angular/core';
import {UserStatusService} from '../user-status.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userStatusService: UserStatusService) {
  }

  ngOnInit(): void {
    this.users = this.userStatusService.activeUsers;
  }

  onSetToInactive(id: number): void {
    this.userStatusService.setToInactive(id);
  }
}
