import { Component, OnInit } from '@angular/core';
import {ComicService} from "../../service/comic/comic.service";
import {Comic} from "../../model/comic";

@Component({
  selector: 'app-recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.css']
})
export class RecommendedListComponent implements OnInit {

  listComics: Comic[] = [];

  constructor(private comicService:ComicService) { }

  ngOnInit(): void {
    this.comicService.getComicsList().subscribe(res=>{
      this.listComics = res;
    });
  }

}
