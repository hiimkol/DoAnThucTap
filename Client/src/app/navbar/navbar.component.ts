import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../model/Type';
import { ContentService } from '../content.service';
import { Reader } from '../model/Reader';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() brand: string;
  @Input() currentReader: Reader;
  types: Type[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getAllType().subscribe(types => { this.types = types; });
  }

}
