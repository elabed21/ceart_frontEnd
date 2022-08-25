import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product.model';
import { LocalStorageService } from './local-storage.service';
;

@Injectable({
  providedIn: 'root'
})
export class test {

  url = environment.server_api_url;
  constructor(private http: HttpClient, private storage: LocalStorageService) { }


  addProduct(data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.url}/product/add`, data, { observe: 'response' });


  }

  allProduct(): Observable<HttpResponse<IProduct[]>> {
    return this.http.get<IProduct[]>(`${this.url}/product/all`, { observe: 'response' });
  }
}
