import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
})
export class ComponentExample {
  handleClick() {
    throw new Error('Method not implemented.');
  }
  @Input() title: any;

  constructor() {
    console.log(this.data);
  }

}
