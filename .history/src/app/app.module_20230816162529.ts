import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicAngularGridFactory } from './dynamic-angular-grid-factory/dynamic-angular-grid-factory.component';
import { CardSample } from './components/card-sample/card-sample.component';

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
