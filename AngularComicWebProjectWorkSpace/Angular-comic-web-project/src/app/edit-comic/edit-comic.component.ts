import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comic, Comment} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.css']
})
export class EditComicComponent implements OnInit {
  comic: Comic | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
    private router: Router) {
  }

  ngOnInit() {

    this.reloadData();
  }

  reloadData() {
   this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
     console.log("day la du lieu"+data)
     this.comic = data;
   }, error => console.log(error));
  }
  onSubmit() {
    this.router.navigate(['/comics']);
  }


}
