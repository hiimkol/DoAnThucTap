import { Component, OnInit } from '@angular/core';
import { StatisticalService } from '../statistical.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  numberManga: number;
  numberChapter: number;
  numberComment: number;
  numberMember: number;
  constructor(private statistical: StatisticalService) { }

  ngOnInit() {
    this.getNumberManga();
    this.getNumberChapter();
    this.getNumberComment();
    this.getNumberMember();


  }
  getNumberManga(): any {
    this.statistical.getNumberManga().subscribe(data => this.numberManga = data);
  }
  getNumberChapter(): any {
    this.statistical.getNumberChapter().subscribe(data => this.numberChapter = data);

  }
  getNumberComment(): any {
    this.statistical.getNumberComment().subscribe(data => this.numberComment = data);

  }
  getNumberMember(): any {
    this.statistical.getNumberMember().subscribe(data => this.numberMember = data);
  }
}
