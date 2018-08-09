import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './content/content.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { RoomComponent } from './room/room.component';
import { ProfileComponent } from './profile/profile.component';
import { PagingComponent } from './paging/paging.component';
import { ContentTypeComponent } from './content-type/content-type.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent,
    NewCommentComponent,
    SidebarComponent,
    MangaDetailComponent,
    RoomComponent,
    ProfileComponent,
    PagingComponent,
    ContentTypeComponent,
    CommentBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
