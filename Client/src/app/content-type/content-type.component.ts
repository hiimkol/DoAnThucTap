import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/Manga';
import { ContentService } from '../content.service';
import { Type } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.css']
})
export class ContentTypeComponent implements OnInit {
  mangas: Manga[];
  types: Type[];
  name: string;
  constructor(private contentService: ContentService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getMangas();
  }

  getMangas(): void {
    // const name = this.route.snapshot.paramMap.get('name');
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.getMangasWhenParamChange();
       // reset and set based on new parameter this time
    });
    this.contentService.getMangasWithType(this.name).subscribe(manga => {
      this.mangas = manga;
      for (let i = 0; i < this.mangas.length; i++) {
        this.contentService.getTypesOfManga(this.mangas[i].idManga).subscribe(types => this.mangas[i].tags = types);
      }
    });
  }

  getMangasWhenParamChange(): void {
    this.contentService.getMangasWithType(this.name).subscribe(manga => {
      this.mangas = manga;
      console.log(manga);
      for (let i = 0; i < this.mangas.length; i++) {
        this.contentService.getTypesOfManga(this.mangas[i].idManga).subscribe(types => this.mangas[i].tags = types);
      }
    });
  }

}
