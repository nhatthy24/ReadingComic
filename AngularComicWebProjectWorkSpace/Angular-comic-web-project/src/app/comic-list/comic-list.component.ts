import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ComicService} from "../comic.service";
import {Comic, Employee} from "../comic";



@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  comics: Observable<Comic[]> | undefined;

  constructor(private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comics = this.comicService.getComicsList();
  }
}
