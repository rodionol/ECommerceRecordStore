import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})


export class SearchProductComponent implements OnInit {
  products: Product[] = [];
  isDisabled: boolean;
  @ViewChild('searchField', {static: false}) searchField:ElementRef;
  foundProducts: Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.isDisabled = false;
  }

  isValidField(field){
    return field != null && field != "";
  }

  search() {
    this.isDisabled = true; 

      this.productService.getProductBySearchTerm(this.searchField.nativeElement.value).subscribe((data:Product[]) => {  
        console.log('data:', data);
        this.foundProducts.push(data); 
        console.log('found: ', this.foundProducts);  
      });
    
  }

}
