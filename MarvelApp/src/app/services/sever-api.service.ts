import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SeverAPIService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  
  
  
  saveUsers(params){
    const url='/api/comprador';
    return this.http.post(url, params);
  }
  getUsers(){
    const url='/api/comprador';
    return this.http.get(url);
  }
  getMarvel(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=16ad7184571b0bdb1a0c7cba4118b55d&hash=39c77dd64eaf3a01f2f6f82f6c802298');
  }

  setToken(token) {
    this.cookies.set("token", token);
    console.log(token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
