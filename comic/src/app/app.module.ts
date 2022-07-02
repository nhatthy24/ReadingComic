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
    RecommendedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
