import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap, observeOn } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri='http://localhost:4000/api'
  authtoken;
  user;



  constructor(private http:HttpClient,
    private cookie:CookieService
    ) { }


  login(body){


   return this.http.post(`${this.uri}/Login`,body)


  }

 settokencookie(token)
  {
     //localStorage.setItem('token',token)
      this.cookie.set("token",token,5)
  }


  getcookie(){

    return this.cookie.get("token")

  }




  gettoken()
  {
    return localStorage.getItem('token')

  }


  setUsername(Username)
  {
     this.cookie.set('Username',Username)

    }

  getUsername()
  {
     return this.cookie.get('Username')
  }


  logout()
  {
    localStorage.clear()
  }

}
