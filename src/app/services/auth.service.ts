import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginResponse } from '../models/login.model';
import { LocalStorageService } from './local-storage.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.secureApiURL;
  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  login(data: any): Observable<HttpResponse<ILoginResponse>> {
    return this.http.post<ILoginResponse>(this.url + "auth/signin", data, { observe: 'response' });
  }


  signup(data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.url + "auth/signup", data, { observe: 'response' });
  }
}
