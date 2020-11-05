import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { SignupService } from "../signup/signup.service";

import { FormGroup,FormBuilder,Validators, FormControlName, FormControl } from "@angular/forms";
import { CookieService } from "ngx-Cookie-Service";
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  signupForm:FormGroup=new FormGroup({

    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),


  })


  angForm:FormGroup;
    constructor(
    private ms:SignupService,

    private router:Router,
    private fb:FormBuilder,
    private cookie:CookieService



  ) {


  }


  ErrorMsg=""
  ishown:boolean=false

  adduser(name,email,password)
  {


    this.ErrorMsg=JSON.stringify(this.ms.getdatas())
    this.ms.adduser(name,email,password)
    this.ishown=true


  }


  addnewuser()
  {
    this.ms.signup(this.signupForm.value).subscribe((data:any)=>{


      console.log(data)
      this.ErrorMsg=JSON.stringify(data)
      this.ishown=true

    })
  }


  ngOnInit(): void {}
}
