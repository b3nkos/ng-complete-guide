import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ActiveUsersComponent} from './active-users/active-users.component';
import {InactiveUsersComponent} from './inactive-users/inactive-users.component';
import {UserStatusService} from './user-status.service';
import {CounterService} from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserStatusService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
