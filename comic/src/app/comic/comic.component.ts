import { Component, OnInit } from '@angular/core';
import { LoadDataService} from "../service/load-data/load-data.service";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  dataComic: any;

  constructor(private loadDataService: LoadDataService) { }

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics(){
    this.loadDataService.listAllComics().subscribe((res) =>{
      this.dataComic = res;
    })
  }

}
