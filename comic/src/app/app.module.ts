import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ComicComponent} from "./comic/comic.component";
import {HttpClientModule} from "@angular/common/http";
import { DetailComponent } from './detail/detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ReadingComponent } from './reading/reading.component';
import {CommonModule} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { CompletedListComponent } from './home/completed-list/completed-list.component';
import { NewupdatedListComponent } from './home/newupdated-list/newupdated-list.component';
import { RecommendedListComponent } from './home/recommended-list/recommended-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListComicComponent } from './list-comic/list-comic.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ChapterComponent,
    ComicComponent,
    DetailComponent,
    ReadingComponent,
    HomeComponent,
    CompletedListComponent,
    NewupdatedListComponent,
    RecommendedListComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    ListComicComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
  ],
  exports:[HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
