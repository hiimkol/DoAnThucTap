import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../reader.service';
import { Reader } from '../model/Reader';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readerService: ReaderService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin(username: string, password: string) {
    this.readerService.checkLogin({ username, password } as Reader).subscribe(reader => {
      if (this.readerService.currentReader != null) {
        this.readerService.currentReader = reader;
        this.router.navigate(['/']);
      }
    });

  }

}
