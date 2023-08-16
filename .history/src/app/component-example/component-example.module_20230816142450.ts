import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicAngularGridFactory } from './component-example.component';

@NgModule({
  declarations: [DynamicAngularGridFactory],
  imports: [CommonModule],
  exports: [DynamicAngularGridFactory],
})
export class TableGridModule { }
