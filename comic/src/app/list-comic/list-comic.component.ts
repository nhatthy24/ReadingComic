import { Component, OnInit } from '@angular/core';
import {Comic} from "../model/comic";
import {ComicService} from "../service/comic/comic.service";

@Component({
  selector: 'app-list-comic',
  templateUrl: './list-comic.component.html',
  styleUrls: ['./list-comic.component.css']
})
export class ListComicComponent implements OnInit {

  searchComic='';
  comics: Comic[]=[];
  comic='';

  constructor(private comicService: ComicService) { }

  ngOnInit(): void {
    this.comicService.getComicsList().subscribe(res=>{
      this.comics = res;
    })
  }

}
