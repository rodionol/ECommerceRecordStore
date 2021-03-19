import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {id: 1, productImageUrl:"/assets/images/A-Big-Orange.png", recordTitle: "A Big Orange", artist: "Aubrey", year:"2020",price:"$21.00"},
      {id: 2, productImageUrl:"/assets/images/day-after-tmr.png", recordTitle: "Day After Tomorrow", artist: "Funky Monkey ", year:"2021",price:"$17.50"},
      {id: 3, productImageUrl:"/assets/images/hot-air-balloon.png", recordTitle: "Hot Air Balloon", artist: "The Dramatic Duo", year:"2021",price:"$18.50"},
      {id: 4, productImageUrl:"/assets/images/leaving-town.png", recordTitle: "Leaving Town", artist: "Tobi", year:"2020",price:"$15.00"},
      {id: 5, productImageUrl:"/assets/images/freaking-out-remix.png", recordTitle: "Freaking Out (Remix)", artist: "Icy Volcano", year:"2021",price:"$22.00"},
      {id: 6, productImageUrl:"/assets/images/mending-a-broken-heart.png", recordTitle: "Mending A Broken Heart", artist: "Icy Volcano", year:"2020",price:"$18.50"},
      {id: 7, productImageUrl:"/assets/images/yes-yes.png", recordTitle: "Yes, Yes", artist: "Vinci", year:"2019",price:"$14.00"},
      {id: 8, productImageUrl:"/assets/images/light-out.png", recordTitle: "Light Out", artist: "Dance House", year:"2019",price:"$14.00"},
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // prod id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(prod => prod.id)) + 1 : 11;
  }
}