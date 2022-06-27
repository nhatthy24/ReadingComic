import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comment, Like} from "../comic";
import {ComicService} from "../comic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  comments: Observable<Comment[]> | undefined;
  likes: Observable<Like[]> | undefined;

  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comments= this.comicService.getCommentsByUserId(this.route.snapshot.params['userId']);
    this.likes= this.comicService.getLikesByUserId(this.route.snapshot.params['userId']);
  }
}
