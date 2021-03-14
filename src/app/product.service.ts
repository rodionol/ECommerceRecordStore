import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Product } from './model/product'



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[];
    

  constructor( private http:HttpClient) { }

  onGetProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  onGetProduct(id:number){
   return this.http.get<Product>('http://localhost:3000/products/'+id);
   
  }

  onUpdateProduct(product:Product){
    return this.http.put('http://localhost:3000/products/'+product.id, product)
  }

  createProduct(product:Product){
    return this.http.post('http://localhost:3000/products',product);
    }

  onDeleteProduct(product){
   return this.http.delete('http://localhost:3000/products/'+ product.id);
}


}