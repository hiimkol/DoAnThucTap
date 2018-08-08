import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Reader } from './model/Reader';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addHero(reader: Reader): Observable<Reader> {
    console.log(reader);
    return this.http.post<Reader>(this.baseURL + '/user/regist', reader);
  }

  checkLogin(reader: Reader): Observable<Reader> {
    console.log(reader);
    return this.http.post<Reader>(this.baseURL + '/user/login', reader);
  }
}
