import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';
// import {MatProgressSpinnerModule} from '@angular/material';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})


export class SearchProductComponent implements OnInit {
  productId: string;
  productDescriptionEnglish: string;
  message: string;
  // let result: Array<string>
  products: Product[] = [];
  isDisabled: boolean;
  // @ViewChild('productIdField', {static: false}) productIdField:ElementRef;
  @ViewChild('searchField', {static: false}) searchField:ElementRef;
  foundProducts: Product[] = [];
  foundGenres: string;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.isDisabled = false;
    this.foundProducts = PRODUCTS;
  }

  isValidField(field){
    return field != null && field != "";
  }

  search() {
    this.isDisabled = true; 
    this.foundProducts = [];
      this.productService.getProductBySearchTerm(this.searchField.nativeElement.value).subscribe((data:Product) => {  
        console.log('data:', data);
        this.foundProducts.push(data);
        // console.log('DATA:', data);
        console.log(this.foundProducts);  
      });
      // this.productService.getProductBySearchTerm(this.searchField.nativeElement.value).subscribe((data:any) => {
      //   console.log(data);
      //   this.products = <Product[]>data;
      //   this.isDisabled = false; 
      // }, (err:any) => {
      //   console.log(err.error.status);
      //   this.isDisabled = false; 
      // });
  }


  // clear() {
  //   this.products = null;
  // }

  filter(category : string){
    console.log('category: ', category);
    this.foundProducts = []; // clear old search data
    PRODUCTS.forEach(product => {
      if (product.genre.toLowerCase() == category.toLowerCase()) {
        this.foundProducts.push(product);
      }  
    });
  }

  sortByPrice(event) {
    let selectedIndex = event.path[0].options.selectedIndex;
    switch (selectedIndex) {
      case 1:
        this.foundProducts = PRODUCTS; // clear old search data
        // outer pass
        for (let i = 0; i < this.foundProducts.length; i++) {

          // inner pass
          for (let j = 0; j < this.foundProducts.length - i - 1; j++) {

            // value comparison (desc)
            if (this.foundProducts[j].price < this.foundProducts[j + 1].price) {
              console.log('j ', this.foundProducts[j+1], ', j+1: ', this.foundProducts[j+1]);
              // swap
              let temp = this.foundProducts[j];
              this.foundProducts[j] = this.foundProducts[j + 1];
              this.foundProducts[j+1] = temp;
            }

          }

        }
        break;
      case 2: 
        this.foundProducts = []; // clear old search data
        console.log('low to high');
        break;
    }
  }

}
