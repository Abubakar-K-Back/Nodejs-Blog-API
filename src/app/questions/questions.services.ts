import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";
import { blogposts } from "./blogspost";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  uri='http://localhost:4000/api'

  constructor(private http:HttpClient) { }



post(title,
  Body,
  CreatedBy,)

{
  const obj={
    title,
      Body,
      CreatedBy
    };
  console.log(obj);
  this.http
    .post(`${this.uri}/CreatePost`,obj)
    .subscribe((res)=>console.log("Blogs Database Updated"))
    {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }


}

comment(
  Body,
  CreatedBy,
  Posttitle)


{
  const obj={

      Body,
      CreatedBy,
      Posttitle
    };
  console.log(obj);
  this.http
    .post(`${this.uri}/postcomment`,obj)
    .subscribe((res)=>console.log("comment Database Updated"))
    {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }


}



getallposts(){

  return this.http.get(`${this.uri}/GetBlogs`);
}
}
