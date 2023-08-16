import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExample {
  @Output() eventIdEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string = '';
  @Input() buttonName: string = '';
  @Input() image: string = '';

  handleClick() {
    this.eventIdEmitter.emit({ this.title: this.title })
  }

  constructor() {
  }

}
