import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
})
export class DynamicAngularGridFactory {
  @Input() data: any;
}
