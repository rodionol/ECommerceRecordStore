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
  allProducts = PRODUCTS;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
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

  /** GET product by search term. Will 404 if id not found */
  public getProductBySearchTerm(desc: string): Observable<Product> {
    // let foundProduct: Product;
    let foundProductsByTitle: Product[];
    let foundProductsByArtist: Product[];

    // find by artist
    this.allProducts.forEach(product => {
      if (desc.trim() == product.artist.toLowerCase()) {
        console.log('product found (artist):', product);
        foundProductsByArtist.push(product);
      }
    });

    this.allProducts.forEach(product => {
      if (desc.trim().toLowerCase() == product.recordTitle.toLowerCase() || desc.trim() == product.artist.toLowerCase()) {
        console.log('product found:', product);
        foundProducts.push(product);
      }

    });
    const url = `${this.productsUrl}/${foundProducts[0].id}`;
    //console.log('URL:', url);
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product desc=${desc}`)),
      catchError(this.handleError<Product>(`getProduct desc=${desc}`))
    );
  }

  create(product: Product) {
    this.httpClient.post<Product>(`${this.baseUrl}product/create`, product).subscribe(data => {
      console.log(data);
    },
    error =>
      console.log('Could not create product.'));
  }

}
