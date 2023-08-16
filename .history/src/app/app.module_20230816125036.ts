import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicAngularGrid } from './dynamic-angular-grid/dynamic-angular-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicAngularGrid
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
