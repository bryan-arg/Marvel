import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeverAPIService {

  constructor(private http: HttpClient) { }
  getMarvel(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=16ad7184571b0bdb1a0c7cba4118b55d&hash=39c77dd64eaf3a01f2f6f82f6c802298');
  }

}
