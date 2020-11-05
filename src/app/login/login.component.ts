import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from "./login.services";
import { Router } from "@angular/router";
import { Target, tokenName } from '@angular/compiler';
import { FormGroup,FormBuilder,Validators, FormControl,ReactiveFormsModule, EmailValidator } from "@angular/forms";
import { JsonPipe } from '@angular/common';
import { subscribeOn,map } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { CookieService } from "ngx-cookie-service";
import { jsonwebtoken } from "jsonwebtoken";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private logoutbutton


    loginform:FormGroup=new FormGroup({

      name:new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),


    })

  constructor(


    private ms:LoginService,
    private router:Router,
    private cookie:CookieService,

    )
     {

    }
    ErrorMsgs=""
    ErrorMsg=""
    ishown:boolean=false;
    MyLoginForm:boolean=true
    Logoutbtn:boolean=true
    ishowntrue:boolean=false
    logins()
    {

      if(this.ms.getcookie()){
        this.ishown=true
        this.ErrorMsg="User Already Logged In / Log Out First"
        return
      }

      this.ms.login(this.loginform.value).subscribe((data:any)=>{

        if(data.success){



          this.ishowntrue=true

          this.ErrorMsgs="Succesfully "+data.msg

          this.cookie.set("Username",this.loginform.controls['name'].value)

          this.ms.setUsername(this.loginform.controls['name'].value)

          this.loginform.disable()

          this.ms.settokencookie(data.token)

          this.ms.setUsername(JSON.stringify(this.loginform.controls['name'].value))

          //this.router.navigate(["/Questions"])

          this.loginform.disable()

          this.logoutbutton=true
          this.ishown=false

        }

        else
        {

          console.log(data)
          this.ErrorMsg=data.msg
          this.ishown=true
          return


        }
        })
    }




  ngOnInit(): void {

  }



  Logout()
  {
    this.cookie.delete("token")
    this.cookie.delete("Username")
    this.ms.logout();
    this.cookie.deleteAll;
    this.loginform.enable()


      this.ishown=true
      this.ErrorMsg="User Logged Out"
    }
}





