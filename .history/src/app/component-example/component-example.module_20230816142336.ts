import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicAngularGridFactory } from './dynamic-angular-grid.component';

@NgModule({
  declarations: [DynamicAngularGridFactory],
  imports: [CommonModule],
  exports: [DynamicAngularGridFactory],
})
export class TableGridModule { }
