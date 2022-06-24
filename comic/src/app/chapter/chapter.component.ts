import { Component, OnInit } from '@angular/core';
import {LoadDataService} from "../service/load-data/load-data.service";
import {Chapter} from "../model/chapter";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  private dataChapter: any;

  constructor(private loadDataService:LoadDataService) { }

  ngOnInit(): void {
  }
  //lay toan bo du lieu
  getChapter(){
    this.loadDataService.listAllChapter().subscribe((res)=>{
      this.dataChapter = res;
    })
  }
  // lay chapter co id=1
  getChapterById(id:number){

  }
}
