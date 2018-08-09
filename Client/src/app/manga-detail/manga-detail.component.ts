import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ContentService } from '../content.service';
import { Manga } from '../model/Manga';
import { Chapter } from '../model/Chapter';
import { ReaderService } from '../reader.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {
  manga: Manga;
  chapters: Chapter[];
  isFollow: boolean;
  constructor(private route: ActivatedRoute,
    private mangaService: ContentService,
    private readerService: ReaderService) {
    this.isFollow = false;
    this.manga = new Manga();

  }

  ngOnInit() {
    this.getManga();
  }
  getManga(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mangaService.getManga(id)
      .subscribe(manga => {
        this.manga = manga;
        this.mangaService.getTypesOfManga(this.manga.idManga).subscribe(type => this.manga.tags = type);
        this.mangaService.getListChapter(this.manga.idManga).subscribe(chapters => this.manga.chapter = chapters);
        this.mangaService.checkFollow(this.manga.idManga, this.readerService.currentReader.username)
          .subscribe(data => this.isFollow = data);

      });
  }
  doOrDont() {
    if (this.isFollow) {
      console.log(this.isFollow);
      this.mangaService.unSubcribe(this.readerService.currentReader.username, this.manga.idManga).subscribe(data => this.isFollow = data);
    } else {
      this.mangaService.subcribe(this.readerService.currentReader.username, this.manga.idManga)
        .subscribe(data => this.isFollow = !this.isFollow);
    }
  }
}
