import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Manga } from '../model/Manga';
import { Type } from '../model/Type';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  mangas: Manga[];
  constructor(private contentService: ContentService) { }
  types: Type[];
  ngOnInit() {

    // this.contentService.getAllManga().subscribe(manga => this.manga = manga);
    this.getMangas();
  }
  getMangas(): void {
    this.contentService.getAllManga().subscribe(manga => {
      this.mangas = manga;
      for (let i = 0; i < this.mangas.length; i++) {
        this.contentService.getTypesOfManga(this.mangas[i].idManga).subscribe(types => this.mangas[i].tags = types);

      }
    });

  }

}
