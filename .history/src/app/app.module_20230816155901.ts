import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicAngularGridFactory } from './dynamic-angular-grid/dynamic-angular-grid.component';
import { CardSample } from './card-sample/card-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicAngularGridFactory,
    CardSample
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
