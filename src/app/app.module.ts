import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from './task/task.component';
import {AssignmentThreeComponent} from './assignment-three/assignment-three.component';
import {CockpitComponent} from './cockpit/cockpit.component';
import {ServerElementComponent} from './server-element/server-element.component';
import {GameControlComponent} from './game-control/game-control.component';
import {OddComponent} from './odd/odd.component';
import {EvenComponent} from './even/even.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TaskComponent,
    AssignmentThreeComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
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
