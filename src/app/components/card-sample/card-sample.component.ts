import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrls: ['./card-sample.component.scss']
})
export class CardSample {
  @Output() eventIdEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string = '';
  @Input() buttonName: string = '';
  @Input() image: string = '';
  @Input() styles: string[] = [];

  constructor() { }

  handleClick() {
    this.eventIdEmitter.emit({ title: this.title })
  }
}
