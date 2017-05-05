import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

import { ScorecardBuilderService } from './scorecard/scorecard-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ScorecardBuilderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
