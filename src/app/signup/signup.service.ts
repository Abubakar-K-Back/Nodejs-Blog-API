import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  uri='http://localhost:4000/api'

  constructor(private http:HttpClient) { }


  getdata;



  adduser(name,email,password){
    const obj={


      name,
      email,
      password,


    };

    console.log(obj);

    this.http
      .post(`${this.uri}/Users`,obj)
      .subscribe((data:any)=>{

        localStorage.removeItem("data")
        console.log(data)
        localStorage.setItem("data",data)

      })
  }

  getdatas()
  {
    return localStorage.getItem("data")
  }
  setdata(somedata)
  {
    localStorage.setItem("data",somedata)
  }


  signup(obj)
  {
    return this.http.post(`${this.uri}/Users`,obj)
  }





}
