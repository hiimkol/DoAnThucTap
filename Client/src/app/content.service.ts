import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from './model/Manga';
import { Observable } from '../../node_modules/rxjs';
import { Type } from './model/Type';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  baseURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getAllManga(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.baseURL + '/manga/all');
  }

  public getManga(id: number): Observable<Manga> {
    return this.http.get<Manga>(this.baseURL + '/manga?id=' + id);
  }

  public getAllType(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseURL + '/type/all');
  }

  public getTypesOfManga(id: number): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseURL + '/type?id=' + id);
  }

}
