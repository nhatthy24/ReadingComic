import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor(private _http:HttpClient) { }

  listAllChapter(){
    return this._http.get("http://localhost:3000/chapter");
  }

  listAllComics(){
    return this._http.get("http://localhost:3000/comic");
  }

  getComicById(id: any) {
    return this._http.get("http://localhost:3000/comic/"+id);
  }

  getChapterByComicId(id: any) {
    return this._http.get("http://localhost:3000/chapter?comic_id="+id);
  }
}
