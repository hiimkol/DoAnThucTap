import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ContentComponent },
  { path: 'manga/:id', component: MangaDetailComponent },
  { path: 'follow', component: ProfileComponent },
  { path: 'room/:idChapter', component: RoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
