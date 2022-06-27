import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comic} from "../comic";
import {ComicService} from "../comic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters: Observable<Chapter[]> | undefined;
  chapter: Observable<Chapter> | undefined;
  comic_id: number | undefined;
  comment_number: number | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comic_id=this.route.snapshot.params['id'];
    this.chapters = this.comicService.getChaptersByComicId(this.route.snapshot.params['id']);
  }
}
