import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  data = [];
  styles = ['styling'];
  component = '<button>Click me</button>';
  title = 'dynamic-grid-angular';
  slides = [
    {
      title: 'Discover our skin care product line',
      buttonName: 'View products',
      image: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80',
      position: 1,
    },
    {
      title: 'Tips for natural, glowing makeup',
      buttonName: 'See tips',
      image: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      position: 2,
    },
    {
      title: 'The secrets to healthy, shiny hair',
      buttonName: 'See secrets',
      image: 'https://images.unsplash.com/photo-1586220742613-b731f66f7743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      position: 3,
    }
  ];

  handleEventData(data: any): void {
    // Set here all functions to handle from dynamic component grid
    const { eventData, key, index } = data;
    const dynamicFunctions: any = {
      toggleChange: () => {
      },
      emitButtonClick: () => {
        eventData.preventDefault();
      },
      cardClick: () => {
      },
    };

    dynamicFunctions[key]();
  }

}
