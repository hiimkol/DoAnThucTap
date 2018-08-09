import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { tap } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatisticalService {
  numberManga: number;
  numberChapter: number;
  numberComment: number;
  numberMember: number;
  baseURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getNumberManga(): Observable<number> {
    return this.http.get<number>(this.baseURL + '/statist/getNumberManga').pipe(
      tap(data => this.numberManga = data)
    );
  }
  getNumberChapter(): Observable<number> {
    return this.http.get<number>(this.baseURL + '/statist/getNumberChapter').pipe(
      tap(data => this.numberChapter = data)
    );
  }
  getNumberComment(): Observable<number> {
    return this.http.get<number>(this.baseURL + '/statist/getNumberComment').pipe(
      tap(data => this.numberComment = data)
    );
  }
  getNumberMember(): Observable<number> {
    return this.http.get<number>(this.baseURL + '/statist/getNumberMember').pipe(
      tap(data => this.numberMember = data)
    );
  }
}
