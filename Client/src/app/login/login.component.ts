import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../reader.service';
import { Reader } from '../model/Reader';
import { Router } from '../../../node_modules/@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentReader: Reader;

  constructor(private readerService: ReaderService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin(username: string, password: string) {
    this.readerService.checkLogin({ username, password } as Reader).subscribe(reader => {
      this.currentReader = reader;
      if (this.currentReader != null) {
        this.router.navigate(['/']);
      }
    });

  }
}
