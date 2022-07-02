import { Component, OnInit } from '@angular/core';
import {LoadDataService} from "../service/load-data/load-data.service";
import {ActivatedRoute} from "@angular/router";
import {ComicService} from "../service/comic/comic.service";
import {Observable} from "rxjs";
import {Comic} from "../model/comic";
import {Chapter} from "../model/chapter";
import {UtilService} from "../service/util/util.service";
import {Like} from "../model/like";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  comic: Comic | undefined;
  listChapter: Chapter[] | undefined;
  listLike: Like[] | undefined;
  listComment: Comment[] | undefined;
  listComics: Comic[] | undefined;
  first_chap_id: number = 0;
  last_update: string = "";
  constructor(private comicService: ComicService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // lay id tu duong dan
    this.activateRoute.paramMap.subscribe(params =>{
      const id = params.get(`id`);
      console.log(id);
      this.getComicById(id);
      this.getListChapterByComicId(id);
    });
    this.getListComic();
  }

  getComicById(id: any) {
    this.comicService.getComicByComicId(id).subscribe(res =>{
      this.comic = res;
      console.log(res);
      console.log("comic: " +this.comic);
      console.log()
    })
  }
  getListChapterByComicId(id: any){
    this.comicService.getChaptersByComicId(id).subscribe(res=>{
      this.listChapter = res;
      this.first_chap_id = this.listChapter[0].id;
      this.last_update = this.listChapter[this.listChapter.length-1].date_created;
    })
  }
  getListComic(){
    this.comicService.getComicsList().subscribe(res =>{
      this.listComics = res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
  totalChapter(){
    return this.listChapter?.length;
  }

}
