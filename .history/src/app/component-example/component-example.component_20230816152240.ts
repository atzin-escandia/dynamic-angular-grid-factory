import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExample {
  @Output() eventDataEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string = '';
  @Input() buttonName: string = '';
  @Input() image: string = '';
  @Input() id: number = 0;

  handleClick() {
    this.eventDataEmitter.emit({ id: this.id })
  }

  constructor() {
  }

}
