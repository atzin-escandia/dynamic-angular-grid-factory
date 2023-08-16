import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
})
export class ComponentExample {
  @Input() data: any;

  constructor() {
    console.log(data);

  }

}
