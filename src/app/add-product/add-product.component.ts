import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   id:number;
   isEdit:boolean = false;
   msg:string;
   product:Product = {
     id:null,
     title:"",
     artist:"",
     sellingPrice:null,
     yearReleased:null,
     genre:""
   }
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit():void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.isEdit=true;
     this.productService.onGetProduct(this.id).subscribe(res =>{
       this.product = res;
     });
      
    }
    }
   
  
 getLatestProducts(){
   this.productService.onGetProducts().subscribe;
      
 }
  

  onSubmit(myForm: NgForm) {
    let product: Product = myForm.value;
    this.productService.createProduct(product).subscribe(res => {
      this.getLatestProducts();
      myForm.form.reset();
      console.log("Product added");
      this.msg = "You Added A Product!!"
    });
  }
   
    editProduct(myForm:NgForm) {
      console.log('edit a product');
      
      this.productService.onUpdateProduct(this.product).subscribe(()=>{
        this.getLatestProducts();
         console.log("Product is updated!!");
         this.isEdit=false;
          myForm.form.reset();
          this.msg = "You Updated A Product"
      });
    }
}
