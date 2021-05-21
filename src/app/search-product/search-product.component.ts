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
        if(data != null){
          this.foundProducts.push(data);
        }
        // console.log('DATA:', data);
        console.log(this.foundProducts);  
      });
  }

  filter(category : string){
    console.log('category: ', category);
    this.foundProducts = []; // clear old search data
    PRODUCTS.forEach(product => {
      if (product.genre.toLowerCase() == category.toLowerCase()) {
        this.foundProducts.push(product);
      }
      else if (category.toLowerCase() == "all") {
        this.foundProducts = PRODUCTS; 
      }
    });
  }

  show_all_records(){
    this.foundProducts = PRODUCTS; 
  }
}
