import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from "./local-storage.service";
import {environment} from "../../environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    //const account = this.accountService.accountValue;
    const isLoggedIn = localStorage.getItem('auth_token');
    const secureApiURL = request.url.startsWith(environment.secureApiURL);
    if (isLoggedIn && secureApiURL) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${isLoggedIn}`}
      });
    }

    return next.handle(request);
  }
}
