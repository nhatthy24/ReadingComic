import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public formatDate(inputDate:string){
    var year = inputDate.slice(0,4);
    var month = inputDate.slice(6,8);
    var day = inputDate.slice(10,12);
    return day + "/" + month + "/" + year;
  }
}
