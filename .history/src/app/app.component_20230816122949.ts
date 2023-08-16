import { Component } from '@angular/core';
import { SlidesInfo } from './infinite-carousel/slides';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-grid-angular';
  slides: SlidesInfo[] = [
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

  this.data = [];


handleEventData(data: any): void {
  const agroupmentEnglishTitle = this.agroupment._m_title?.[TrackingConstants.DEFAULT_TRACKING_LANGUAGE];

  // Set here all functions to handle from dynamic component grid
  const { eventData, key, index } = data;
  const dynamicFunctions = {
    toggleChange: () => {
      const activeMB = this.cardSrv.getActiveMasterBox(this.agroupment.projects[index], eventData);

      this.data[index].selectedOption = eventData;
      this.data[index].price = this.currencyPipeSrv.transform(activeMB.ohPrice.amount);
      this.data[index].selectedMb = activeMB;
    },
    emitButtonClick: () => {
      eventData.preventDefault();
      const itemToCart = {
        ...this.agroupment.projects[index],
        selectedMb: this.data[index].selectedMb,
      };

      this.agroupmentSrv.addToCart(itemToCart, index, false, this.type, agroupmentEnglishTitle);
    },
    cardClick: () => {

      this.cardSrv.navigateToDetail(this.agroupment.projects[index]);
      this.agroupmentSrv.trackClickPromotion(this.agroupment.projects[index], index, this.type, agroupmentEnglishTitle);
    },
  };

  dynamicFunctions[key]();
}

}
