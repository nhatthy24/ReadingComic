import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comment} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Observable<Comment[]> | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
    private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comments = this.comicService.getCommentsByComicIdChapterId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid']);
  }
}
