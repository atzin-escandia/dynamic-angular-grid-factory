import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrls: ['./card-sample.component.scss']
})
export class ComponentExample {
  @Output() eventIdEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string = '';
  @Input() buttonName: string = '';
  @Input() image: string = '';
  @Input() styles: string[] = [];

  handleClick() {
    this.eventIdEmitter.emit({ title: this.title })
  }

  constructor() { }
}
