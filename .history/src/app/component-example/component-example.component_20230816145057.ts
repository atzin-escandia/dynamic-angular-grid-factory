import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
})
export class ComponentExample {
  @Input() title: any;

  handleClick() {
    throw new Error('Method not implemented.');
  }

  constructor() {
  }

}