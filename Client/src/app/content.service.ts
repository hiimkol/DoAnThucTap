import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from './model/Manga';
import { Observable } from '../../node_modules/rxjs';
import { Type } from './model/Type';
import { Chapter } from './model/Chapter';
import { ChapterContent } from './model/ChapterContent';
import { Follow } from './model/Follow';

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

  public getListChapter(id: number): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.baseURL + '/chapter?id=' + id);
  }

  public getContent(id: number): Observable<ChapterContent[]> {
    return this.http.get<ChapterContent[]>(this.baseURL + '/chapter/getContent?id=' + id);
  }

  public checkFollow(idManga: number, username: string): any {
    return this.http.get<Boolean>(this.baseURL + '/manga/follow?username=' + username + '&idManga=' + idManga);
  }

  public subcribe(username: string, idManga: number): Observable<Follow> {
    return this.http.get<Follow>(this.baseURL + '/manga/subcribe?username=' + username + '&idManga=' + idManga);
  }

  public unSubcribe(username: string, idManga: number): Observable<boolean> {
    console.log(username + ' ' + idManga);
    return this.http.get<boolean>(this.baseURL + '/manga/unsubcribe?username=' + username + '&idManga=' + idManga);
  }
}
