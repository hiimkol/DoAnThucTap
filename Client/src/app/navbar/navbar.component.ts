import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../model/Type';
import { ContentService } from '../content.service';
import { Reader } from '../model/Reader';
import { LoginComponent } from '../login/login.component';
import { ReaderService } from '../reader.service';
import { Router } from '@angular/router';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { Manga } from '../model/Manga';
import { debounceTime, distinctUntilChanged, switchMap } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() brand: string;
  @Input() currentReader: Reader;
  types: Type[];
  mangas$: Observable<Manga[]>;
  private searchTerms = new Subject<string>();

  constructor(private contentService: ContentService, public readerService: ReaderService, private router: Router) { }

  ngOnInit() {
    this.currentReader = this.readerService.currentReader;
    this.contentService.getAllType().subscribe(types => { this.types = types; });
    this.mangas$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.contentService.searchManga(term)),
    );
  }


  filter(type: Type) {
    this.contentService.getMangasWithType(type.name).subscribe(data => {
      this.contentService.mangas = data;
      this.router.navigate(['/']);
      console.log(this.contentService.mangas);
    });
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
