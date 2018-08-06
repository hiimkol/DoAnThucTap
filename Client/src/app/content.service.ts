import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from './model/Manga';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  baseURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getAllManga(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.baseURL + '/manga/all');
  }
}
