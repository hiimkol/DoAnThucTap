import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../model/Type';
import { ContentService } from '../content.service';
import { Reader } from '../model/Reader';
import { LoginComponent } from '../login/login.component';
import { ReaderService } from '../reader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() brand: string;
  @Input() currentReader: Reader;
  types: Type[];

  constructor(private contentService: ContentService, public readerService: ReaderService) { }

  ngOnInit() {
    this.currentReader = this.readerService.currentReader;
    this.contentService.getAllType().subscribe(types => { this.types = types; });
  }

}
