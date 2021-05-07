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
    // this.productService.getProductByGenre(category).subscribe((data:Product) => {  
    //   console.log('data:', data);
    //   this.foundProducts.push(data);
    //   // console.log('DATA:', data);
    //   console.log(this.foundProducts, '(foundProducts array)');  
    // });
    PRODUCTS.forEach(product => {
      if (product.genre.toLowerCase() == category.toLowerCase()) {
        this.foundProducts.push(product);
      }  
    });
  }

}
