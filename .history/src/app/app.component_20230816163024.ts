import { Component } from '@angular/core';
import { CardSample } from './components/card-sample/card-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  component = CardSample;
  title = 'dynamic-angular-grid-factory';
  data = [
    {
      title: 'Discover the beauty of nature',
      buttonName: 'Explore',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Tips for embracing natural beauty',
      buttonName: 'See tips',
      image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'The wonders of nature-inspired wellness',
      buttonName: 'Explore',
      image: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    }
  ];


  handleEventData(data: any): void {
    // Set here all functions to handle from dynamic component grid
    const { eventData, key, index } = data;

    const dynamicFunctions: any = {
      eventIdEmitter: () => {
        alert(eventData.title)
      },
    };

    dynamicFunctions[key]();
  }

}
