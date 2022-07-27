import { Component, OnInit } from '@angular/core';
import {Comic} from "../model/comic";
import {ComicService} from "../service/comic/comic.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listComics: Comic[] = [];

  constructor(private comicService:ComicService) {}

  ngOnInit(): void {
    this.comicService.getComicsList().subscribe(res=>{
      this.listComics = res;
    });
  }

}
