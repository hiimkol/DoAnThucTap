import { Component } from '@angular/core';
import { Reader } from './model/Reader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brand = 'Comic Palace';
  currentReader: Reader;
}
