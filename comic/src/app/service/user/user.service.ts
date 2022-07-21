import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/v1'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.http.post(API_URL + "/login",user);
  }
}
