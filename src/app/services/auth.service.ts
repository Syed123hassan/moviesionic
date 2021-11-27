import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(data) { return this.http.post(`${environment.tokenURL}/api/users/register`, data) }
  login(data) { return this.http.post(`${environment.tokenURL}/api/users/login`, data) }
  getToken() { return JSON.parse(localStorage.getItem('UserDetails')) }
  getUserDetails() {
    let userDetails = JSON.parse(localStorage.getItem('UserDetails'))
    if (userDetails) {
      return userDetails
    }
  }
}
export interface Product {
  _id,
  productName: string,
  productPrice,
  productImageUrl,
  productDescription
  , __v
}

