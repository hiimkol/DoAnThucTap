import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ReaderService } from '../reader.service';
import { Manga } from '../model/Manga';
import { Chapter } from '../model/Chapter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mangas: Manga[];
  chapter: Chapter[];
  constructor(private contentService: ContentService, private readerService: ReaderService) { }

  ngOnInit() {
    this.getFollowManga();
  }
  getFollowManga(): any {
    this.contentService.getMangasFollowed(this.readerService.currentReader.username)
      .subscribe(data => {
        this.mangas = data;
        for (let i = 0; i < this.mangas.length; i++) {
          this.contentService.getNewestChapter(this.mangas[i].idManga).subscribe(types => this.mangas[i].newestChapter = types);
        }
      });
  }
}
