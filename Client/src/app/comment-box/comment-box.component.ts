import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../content.service';
import { Comment } from '../model/Comment';
import { Manga } from '../model/Manga';
import { ReaderService } from '../reader.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  comments: Comment[];
  @Input() manga: Manga;

  constructor(private contentService: ContentService, private readerService: ReaderService) { }

  ngOnInit() {
    this.getComments();
  }
  getComments(): void {
    // this.contentService.getCommentsOfManga(this.manga.idManga).subscribe(data => );
    this.contentService.getCommentsOfManga(this.manga.idManga).subscribe(data => this.comments = data);
  }

  postComment(content: string) {
    // console.log(content);
    // console.log(this.manga.id);
    this.contentService.postComment(this.manga.idManga, this.readerService.currentReader.username, content)
      .subscribe(data => { this.getComments(); });
  }
}
