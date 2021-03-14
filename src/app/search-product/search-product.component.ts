import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';
import { Router} from '@angular/router';


@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  products:Product[];
  title:string;
  
  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit() {
    this.productService.onGetProducts().subscribe(res =>{
      this.products = res;
    });
  }

  getLatestProducts(){
    
  }

  

   deleteProduct(product){
     this.productService.onDeleteProduct(product).subscribe(res =>{
      // this.getLatestProducts();
      this.ngOnInit();
     });
   }

   search(){
     if(this.title ===""){
       this.ngOnInit();
     } else {
     this.products = this.products.filter(x => {
      return x.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    })
  }
  }

  clear(){
    this.title = "";
  }
}

