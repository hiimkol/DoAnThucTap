import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../reader.service';
import { Reader } from '../model/Reader';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private readerService: ReaderService) { }

  ngOnInit() {
  }
  add(username: string, password: string, name: string, email: string): void {
    username = username.trim();
    password = password.trim();
    name = name.trim();
    email = email.trim();
    if (!name || !password || !name || !email) { return; }
    this.readerService.addHero({ username, password, name, email } as Reader)
      .subscribe(data => {
        console.log(data);
        if (!data) {
          alert('fail');
        } else {
          alert('Success');
        }
      });
  }
}
