import {Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert(`The new status: ${status}`));
  }

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
