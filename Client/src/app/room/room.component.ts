import { Component, OnInit } from '@angular/core';
import { ChapterContent } from '../model/ChapterContent';
import { ContentService } from '../content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  chapterContent: ChapterContent[];
  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContent();
  }
  getContent(): void {
    const id = +this.route.snapshot.paramMap.get('idChapter');
    console.log(id);
    this.contentService.getContent(id).subscribe(content => {
      this.chapterContent = content;
      console.log(this.chapterContent[1].id.img);
    });
  }

}

