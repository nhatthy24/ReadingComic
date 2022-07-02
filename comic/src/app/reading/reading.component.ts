import { Component, OnInit } from '@angular/core';
import {LoadDataService} from "../service/load-data/load-data.service";
import {ActivatedRoute} from "@angular/router";
import {ComicService} from "../service/comic/comic.service";
import {Chapter} from "../model/chapter";
import {Comic} from "../model/comic";

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  comic: Comic | undefined;
  chapter: Chapter | undefined;
  listChapters: Chapter[] = [];

  constructor(private comicService: ComicService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params =>{
      const id = params.get(`id`);
      const chapter_id = params.get(`chapter_id`);
      console.log(id);
      console.log("chapter id: " + chapter_id);
      this.getComicById(id);
      this.getChapterById(chapter_id);
      this.getListChapters(id);
    });
  }

  private getChapterById(id: any) {
    this.comicService.getChaptersByChapterId(id).subscribe(res => {
      this.chapter = res;
      console.log(res);
    })
  }

  private getListChapters(id: any) {
    this.comicService.getChaptersByComicId(id).subscribe(res => {
      this.listChapters = res;
      console.log(res);
    })
  }

  private getComicById(id: any) {
    this.comicService.getComicByComicId(id).subscribe(res =>{
      this.comic = res;
    })
  }

  // Todo: Chuyển về chương trước
  preChapter(id:any){
    let pre_id=0;
    for(var i=0; i<this.listChapters.length; i++){
      if(this.listChapters[i].id==id && i==0) return id;
      if(this.listChapters[i].id==id){
        pre_id = this.listChapters[i-1].id;
      }
    }
    return pre_id;
  }

  // Todo: Chuyển đến chương sau
  conChapter(id:any){
    let con_id=0;
    for(var i=0; i<this.listChapters.length; i++){
      if(this.listChapters[i].id==id && i==this.listChapters.length-1) return id;
      if(this.listChapters[i].id==id){
          con_id=this.listChapters[i+1].id;
      }
    }
    return con_id;
  }
}
