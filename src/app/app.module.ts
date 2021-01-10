import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WarningAlertComponent} from './warningalert/warningalert.component';
import {SuccessAlertComponent} from './successalert/successalert.component';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from './task/task.component';
import {AssignmentThreeComponent} from './assignment-three/assignment-three.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TaskComponent,
    AssignmentThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
