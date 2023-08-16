import { Component } from '@angular/core';
import { ComponentExample } from './component-example/component-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  styles = ['styling'];
  component = ComponentExample;
  title = 'dynamic-grid-angular';
  data = [
    {
      title: 'Discover our skin care product line',
      buttonName: 'View products',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Tips for natural, glowing makeup',
      buttonName: 'See tips',
      image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'The secrets to healthy, shiny hair',
      buttonName: 'See secrets',
      image: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    }
  ];

  handleEventData(data: any): void {
    // Set here all functions to handle from dynamic component grid
    const { eventData, key, index } = data;
    console.log(data);

    const dynamicFunctions: any = {
      eventIdEmitter: (e: any) => {
        alert(eventData.id)
      },
    };

    dynamicFunctions[key]();
  }

}
