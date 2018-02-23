import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RollComponent } from './roll/roll.component';

import { RollService } from './roll.service';


@NgModule({
  declarations: [
    AppComponent,
    RollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
