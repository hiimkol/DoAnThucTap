import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Manga } from '../model/Manga';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  mangas: Manga[];
  constructor(private contentService: ContentService) { }

  ngOnInit() {

    // this.contentService.getAllManga().subscribe(manga => this.manga = manga);
    this.getMangas();
  }
  getMangas(): void {
    this.contentService.getAllManga().subscribe(manga => { this.mangas = manga; console.log(manga); });
    console.log(this.mangas);
  }

}
