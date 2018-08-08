import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ContentService } from '../content.service';
import { Manga } from '../model/Manga';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {
  manga: Manga;
  constructor(private route: ActivatedRoute,
    private mangaService: ContentService, ) { }

  ngOnInit() {
    this.getManga();
  }
  getManga(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mangaService.getManga(id)
      .subscribe(manga => this.manga = manga);
  }
}
