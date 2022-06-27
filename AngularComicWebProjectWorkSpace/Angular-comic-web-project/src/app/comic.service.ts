import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private baseUrl = 'http://localhost:8080/api/v1/comics';
  private baseUrlChapter = 'http://localhost:8080/api/v1/chapters';
  private baseUrlUser = 'http://localhost:8080/api/v1/users';
  constructor(private http: HttpClient) {}
  // Comic
  getComicsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getComicByComicId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  // Chapter
  getChaptersByComicId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/chapters`);
  }
  getChaptersByChapterId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlChapter}/chapters/${id}`);
  }
  // Comment
  getCommentsByComicIdChapterId(id: number,chapterId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/comments/${id}/${chapterId}`);

    }
  getCommentsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrlUser}/${userId}/comments`);
  }
  //User
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrlUser}`);
  }
  //Like
  getLikesByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrlUser}/${userId}/likes`);
  }
}
