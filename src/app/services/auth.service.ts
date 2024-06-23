import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestLogin, UserLoginModel} from "../models/login-user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) {}

  login( loginUser:UserLoginModel ): Observable<RequestLogin>{
    return this.http.post("https://prueba.sandboxmb.com/api/auth/", loginUser);
  }

  setToken(token : string){
    localStorage.setItem( "token" , token )
  }
  getToken(){
    return localStorage.getItem("token");
  }



}
