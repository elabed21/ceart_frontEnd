import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth_token";
const ROLE = "role";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  }
}
