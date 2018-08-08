import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // onGetData: EventEmitter = new EventEmitter();

  // getData() {
  //   this.http.post(...params).map(res => {
  //     this.onGetData.emit(res.json());
  //   })
  // }
  constructor() { }
}
