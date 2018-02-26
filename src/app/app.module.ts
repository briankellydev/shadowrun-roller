import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RollComponent } from './roll/roll.component';

import { RollService } from './roll.service';
import { InitiativeComponent } from './initiative/initiative.component';


@NgModule({
  declarations: [
    AppComponent,
    RollComponent,
    InitiativeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
