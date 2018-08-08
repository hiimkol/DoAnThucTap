import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../reader.service';
import { Reader } from '../model/Reader';
import { Router } from '../../../node_modules/@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private currentUserSubject = new BehaviorSubject<Reader>({} as Reader);
  // public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  // private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  // public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private readerService: ReaderService, private router: Router) { }

  ngOnInit() {
  }
  // setAuth(user: Reader) {
  //   // // Set current user data into observable
  //   // this.currentUserSubject.next(user);
  //   // // Set isAuthenticated to true
  //   // this.isAuthenticatedSubject.next(true);
  // }

  checkLogin(username: string, password: string) {
    this.readerService.checkLogin({ username, password } as Reader).subscribe(reader => {
      if (this.readerService.currentReader != null) {
        // this.setAuth(reader);
        this.readerService.currentReader = reader;
        this.router.navigate(['/']);
      }
    });

  }
  // getCurrentUser(): Reader {
  //   return this.currentUserSubject.value;
  // }

}
