import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentExample } from './card-sample.component';

@NgModule({
  declarations: [ComponentExample],
  imports: [CommonModule],
  exports: [ComponentExample],
})
export class TableGridModule { }
