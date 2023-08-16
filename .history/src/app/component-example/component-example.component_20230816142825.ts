import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-angular-grid-factory',
  templateUrl: './component-example.component.html',
})
export class DynamicAngularGridFactory {
  @Input() component: any;
}
