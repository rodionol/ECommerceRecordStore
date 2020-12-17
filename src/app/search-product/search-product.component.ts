import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

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
  products: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  isValidField(field){
    return field != null && field != "";
  }

  isInvalidField(field){
    return field == null || field == "";
  }

  search() {
    if (this.isValidField(this.productId) && this.isInvalidField(this.productDescriptionEnglish)) {
      this.productService.getProductsID(this.productId).subscribe((data:any) => {
        console.log(data);
        this.products = <Product[]>data;
      }, (err:any) => {
        console.log(err.error.status);
      });
    }
    else if (this.isInvalidField(this.productId) && this.isValidField(this.productDescriptionEnglish)) {
      this.productService.getProductsDescription(this.productDescriptionEnglish).subscribe((data:any) => {
        console.log(data);
        this.products = <Product[]>data;
      }, (err:any) => {
        console.log(err.error.status);
      });
    }
    else if (this.isValidField(this.productDescriptionEnglish) && this.isValidField(this.productDescriptionEnglish)) {
      this.productService.getProductIdDescription(this.productId, this.productDescriptionEnglish).subscribe((data:any) => {
        console.log(data);
        this.products = <Product[]>data;
      }, (err:any) => {
        console.log(err.error.status);
      });
    }
    else {
      this.productService.getProducts().subscribe((data:any) => {
        console.log(data);
        this.products = <Product[]>data;
      }, (err:any) => {
        console.log(err.error.status);
      });
    }
  }

  clear() {
    this.products = null;
  }

}
