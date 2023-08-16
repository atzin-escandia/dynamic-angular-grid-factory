import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicAngularGrid } from './dynamic-angular-grid.component';

@NgModule({
  declarations: [DynamicAngularGrid],
  imports: [CommonModule],
  exports: [DynamicAngularGrid],
})
export class TableGridModule { }
