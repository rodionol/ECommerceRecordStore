import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';
import {MatProgressSpinnerModule} from '@angular/material';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  productId: string;
  productDescriptionEnglish: string;
  message: string;
  // let result: Array<string>
  products: Product[] = [];
  isDisabled: boolean;
  @ViewChild('productIdField', {static: false}) productIdField:ElementRef;
  @ViewChild('productDescField', {static: false}) productDescField:ElementRef;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.isDisabled = false;
  }

  isValidField(field){
    return field != null && field != "";
  }

  search() {
    this.isDisabled = true; 
    console.log(this.isValidField(this.productId));
    console.log(this.isValidField(this.productDescriptionEnglish)); 
    
    if (this.isValidField(this.productId) && !this.isValidField(this.productDescriptionEnglish)) {
      console.log('id only');
      this.productService.getProductById(this.productIdField.nativeElement.value).subscribe((data:Product) => {
        console.log(data);
        this.products = [];
        this.products.push(data);
        this.isDisabled = false; 
      }, (err:any) => {
        console.log(err.error.status);
        this.isDisabled = false; 
      });
    }
    else if (!this.isValidField(this.productId) && this.isValidField(this.productDescriptionEnglish)) {
      console.log('desc only');
      this.productService.getProductByDescription(this.productDescriptionEnglish).subscribe((data:Product) => {
        console.log(data);
      });
      // this.productService.getProductByDescription(this.productDescriptionEnglish).subscribe((data:any) => {
      //   console.log(data);
      //   this.products = <Product[]>data;
      //   this.isDisabled = false; 
      // }, (err:any) => {
      //   console.log(err.error.status);
      //   this.isDisabled = false; 
      // });
    }
    else if (this.isValidField(this.productId) && this.isValidField(this.productDescriptionEnglish)) {
      console.log('both ok');
      // this.productService.getProductIdDescription(this.productId, this.productDescriptionEnglish).subscribe((data:any) => {
      //   console.log(data);
      //   this.products = PRODUCTS;
      //   this.isDisabled = false; 
      // }, (err:any) => {
      //   console.log(err.error.status);
      //   this.isDisabled = false; 
      // });
    }
    else {
      this.productService.getProducts().subscribe((data:any) => {
        console.log(data);
        this.products = <Product[]>data;
        this.isDisabled = false; 
      }, (err:any) => {
        console.log(err.error.status);
        this.isDisabled = false; 
      });
    }
  }

  clear() {
    this.products = null;
  }

}
