import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable, BehaviorSubject } from '../../node_modules/rxjs';
import { Reader } from './model/Reader';
import { map, distinctUntilChanged, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  baseURL = 'http://localhost:8080';
  currentReader: Reader;

  constructor(private http: HttpClient) { }

  addHero(reader: Reader): Observable<Reader> {
    return this.http.post<Reader>(this.baseURL + '/user/regist', reader);
  }

  checkLogin(reader: Reader): Observable<Reader> {
    return this.http.post<Reader>(this.baseURL + '/user/login', reader)
      .pipe(
        tap(data => this.currentReader = data)
      );
  }
}
