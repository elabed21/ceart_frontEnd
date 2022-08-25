import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.secureApiURL;
  constructor(private http: HttpClient) { }


  addProduct(data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.url}/product/add`, data, { observe: 'response' });


  }

  allProduct(): Observable<HttpResponse<ProductModel[]>> {
    return this.http.get<ProductModel[]>(`${this.url}/product/all`, { observe: 'response' });
  }
}
