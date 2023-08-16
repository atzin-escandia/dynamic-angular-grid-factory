import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardSample } from './card-sample.component';

@NgModule({
  declarations: [CardSample],
  imports: [CommonModule],
  exports: [CardSample],
})
export class CardSampleModule { }
