import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comic} from "../../model/comic";
import {Chapter} from "../../model/chapter";
import {Like} from "../../model/like";

const API_URL = 'http://localhost:8080/api/v1'
@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private urlComic = 'http://localhost:8080/api/v1/comics';
  private urlChapter = 'http://localhost:8080/api/v1/chapters';
  private urlUser = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }

  // COMIC
  getComicsList(): Observable<Comic[]>{
    return this.http.get<Comic[]>(API_URL + "/comics");
  }
  getComicByComicId(id: any): Observable<Comic> {
    return this.http.get<Comic>(API_URL +"/comics" + `/${id}`);
  }
  // Chapter
  getChaptersByComicId(id: any): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(API_URL + "/comics" +`/${id}/chapters`);
  }
  getChaptersByChapterId(id: any): Observable<Chapter> {
    return this.http.get<Chapter>(API_URL + `/chapters/${id}`);
  }
  // Comment
  getCommentsByComicIdChapterId(id: number,chapterId: number): Observable<any> {
    return this.http.get(`${this.urlComic}/comments/${id}/${chapterId}`);

  }
  getCommentsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.urlUser}/${userId}/comments`);
  }
  //User
  getUsersList(): Observable<any> {
    return this.http.get(`${this.urlUser}`);
  }
  //Like
  getLikesByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.urlUser}/${userId}/likes`);
  }

  getLikeByComicId(comicId: any) :Observable<Like[]>{
    return this.http.get<Like[]>("");
  }
}
