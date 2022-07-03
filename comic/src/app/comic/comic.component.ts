import { Component, OnInit } from '@angular/core';
import { LoadDataService} from "../service/load-data/load-data.service";
import {Observable} from "rxjs";
import {Comic} from "../model/comic";
import {ComicService} from "../service/comic/comic.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comics: Comic[] | undefined;
  constructor(private comicService: ComicService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics(){
    this.comicService.getComicsList().subscribe(res =>{
      this.comics = res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

}
