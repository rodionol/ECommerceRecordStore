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

  search() {

    this.productService.getProducts().subscribe((data:any) => {
      console.log(data);
      this.products = <Product[]>data;
    }, (err:any) => {
      console.log(err.error.status);
    });

  }

  clear() {
    this.products = null;
  }

}
