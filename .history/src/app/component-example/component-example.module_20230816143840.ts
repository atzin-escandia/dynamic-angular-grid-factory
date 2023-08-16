import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentExample } from './component-example.component';

@NgModule({
  declarations: [ComponentExample],
  imports: [CommonModule],
  exports: [ComponentExample],
})
export class TableGridModule {

  handleClick(): void {
    console.log('holi');
  }
}
