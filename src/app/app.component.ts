import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

import { LoginService } from "../app/login/login.services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalFullstack';
constructor(

  private cookie:CookieService,
  private loginserve:LoginService

)
{}

msgs=""
showme:boolean=false


  getcookie(){
    if(!this.cookie.getAll()){

      this.showme=true
      this.msgs="You are Already Logged Out"
      return
    }
    else
    {


      this.showme=true
      this.msgs="Log Out Successfully Please Clear Your Cookies"
      this.cookie.deleteAll()


    }
  }

  getUsername()
  {
    return this.loginserve.getUsername()
  }


}

