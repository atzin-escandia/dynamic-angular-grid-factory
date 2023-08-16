import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardSample } from './components/card-sample/card-sample.component';
import { DynamicAngularGridFactory } from './components/dynamic-angular-grid-factory/dynamic-angular-grid-factory.component';

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
