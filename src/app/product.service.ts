import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Product } from './model/product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = environment.baseUrl;
  private productsUrl = 'api/products';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  // public getProducts() {
  //   // return this.httpClient.get(`${this.baseUrl+'products'}`);
  //   return PRODUCTS;
  // }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
  }

  /** GET product by id. Will 404 if id not found */
  public getProductById(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    console.log(url);
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // public getProductsDescription(productDescriptionEnglish: string) {
  //   return this.httpClient.get(`${this.baseUrl+'product/productDescriptionEnglish/' + productDescriptionEnglish}`);
  // }

  /** GET product by description. Will 404 if id not found */
  public getProductByDescription(desc: string): Observable<Product> {
    if (!desc.trim()) {
      //console.log('return all products');
    }
    const url = `${this.productsUrl}/${desc}`;
    console.log(url);
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product desc=${desc}`)),
      catchError(this.handleError<Product>(`getProduct desc=${desc}`))
    );
  }

  public getProductIdDescription(productId:string, productDescriptionEnglish: string) {
    return this.httpClient.get(`${this.baseUrl+'product/'+ productId + '/productIdAndProductDescriptionEnglish/' + productDescriptionEnglish}`);
  }

  create(product: Product) {
    //http://localhost:8080/products-ut-wo-db/rest/product/create
    this.httpClient.post<Product>(`${this.baseUrl}product/create`, product).subscribe(data => {
      console.log(data);
    },
    error =>
      console.log('Could not create product.'));
  }

}
