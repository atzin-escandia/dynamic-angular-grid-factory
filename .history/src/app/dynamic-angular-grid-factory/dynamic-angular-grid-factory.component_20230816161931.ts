import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-angular-grid-factory',
  template: `
    <ng-container #ContainerFactory></ng-container>
  `,
})
export class DynamicAngularGridFactory implements AfterViewInit, OnChanges {
  @ViewChild('ContainerFactory', { read: ViewContainerRef }) containerRef: any;
  @Output() eventDataEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() component: any;
  @Input() data: any[] = [];
  @Input() modifyItem: any;
  @Input() events: any[] = [];
  @Input() styles: string[] = [];

  componentRef: any;
  componentRefs: any[] = [];

  ngAfterViewInit(): void {
    if (this.containerRef) {
      this.data.forEach((item, i) => this.createComponent(item, i));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.componentRefs.forEach((compRef, i) => this.reassignModifiedData(compRef, i));
    }
  }

  // This object reassign is for Angular @inputs to detect that the object has changed
  reassignModifiedData(componentRef: any, index: number): void {
    Object.assign(componentRef.instance, this.data[index]);
  }

  createComponent(data: any, index: number): void {
    const componentRef = this.containerRef.createComponent(this.component);

    this.componentRefs.push(componentRef);

    // Add styles
    const firstDiv: HTMLElement = componentRef.location.nativeElement.querySelector('div');
    this.styles.forEach((style) => firstDiv.classList.add(style));

    Object.assign(componentRef.instance, data);
    console.log(componentRef);


    Object.keys(componentRef.instance).forEach((key: any) => {
      if (componentRef.instance[key] instanceof EventEmitter) {
        componentRef.instance[key].subscribe((eventData: any) => {
          this.eventDataEmitter.emit({ eventData, key, index });
          this.reassignModifiedData(componentRef, index);
        });
      }
    });
  }
}
