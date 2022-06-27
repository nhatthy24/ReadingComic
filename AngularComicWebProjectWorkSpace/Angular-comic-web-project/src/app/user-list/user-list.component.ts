import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comic, User} from "../comic";
import {ComicService} from "../comic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.comicService.getUsersList();
  }

}
