import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.css']
})
export class ComponentExample {
  @Input() title: string = '';
  @Input() buttonName: string = '';
  @Input() image: string = '';

  handleClick() {
    throw new Error('Method not implemented.');
  }

  constructor() {
  }

}
