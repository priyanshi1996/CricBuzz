import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "http://cricapi.com/api";
  key:string = "iYIjXOISs4TEkS11Ail9hxbZlDx2";

  getMatchCalender(): Observable<any>{
     return this.http.get("http://cricapi.com/api/matchCalendar/iYIjXOISs4TEkS11Ail9hxbZlDx2");
     //`${this.baseUrl}/matchCalendar/${this.key}`
  }
}
