import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { 
        id: 11, 
        productDescriptionEnglish: 'A Night at the Opera',
        productDescriptionFrench: 'A Night at the Opera',
        brandNameEnglish: 'Queen',
        brandNameFrench: 'Queen',
        productType: 'CD',
        additionalProductIdentification: '',
        targetMarket: 'Canada',
        productImageUrl: '',
        status: '' },
      { 
        id: 12, 
        productDescriptionEnglish: 'Rattle and Hum',
        productDescriptionFrench: 'Rattle and Hum',
        brandNameEnglish: 'U2',
        brandNameFrench: 'U2',
        productType: 'CD',
        additionalProductIdentification: '',
        targetMarket: 'Canada',
        productImageUrl: '',
        status: '' },
      { 
        id: 13,
        productDescriptionEnglish: 'Pastel Blues',
        productDescriptionFrench: 'Pastel Blues',
        brandNameEnglish: 'Nina Simone',
        brandNameFrench: 'Nina Simone',
        productType: 'CD',
        additionalProductIdentification: '',
        targetMarket: 'Canada',
        productImageUrl: '',
        status: '' }
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