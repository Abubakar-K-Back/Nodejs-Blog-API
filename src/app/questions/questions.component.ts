import { Component, OnInit } from '@angular/core';
import { QuestionsService } from "./questions.services";
import { Router } from "@angular/router";
import { FormGroup,FormBuilder,Validators, FormControlName, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { CookieService } from "ngx-cookie-service";
import { LoginService } from "../login/login.services";
import { LoginComponent } from "../login/login.component";



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],

})
export class QuestionsComponent implements OnInit {

  public employees=[]

  public show:boolean = false;
  public buttonName:any = 'Show';
  uri='http://localhost:4000/api'

  FormPost:FormGroup=new FormGroup({

    title:new FormControl ("",Validators.required),
    Body:new FormControl ("",Validators.required),
    Uploader:new FormControl ("",Validators.required)

  })

  blogbody
  blogtitle
  blogcreator

  constructor(

    private qs:QuestionsService,
    private router:Router,
    private cookie:CookieService,
    private Loginserve:LoginService,



  ) { }

  ngOnInit(): void {
  }

  Errormsg=""
  ishown:boolean=false
  showcommment:boolean=true
  toggle()
  {

    if(!this.Loginserve.getcookie())
  {
      this.Errormsg="You Must Login to Post Something"
      this.ishown=true

      console.log("Must Login to Post")
      //this.router.navigate(['/Login'])
      return
  }
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  Post(title,body)
 {

   if(!this.Loginserve.getcookie())
   {
       this.Errormsg="You Must Login to Post Something"
       this.ishown=true

       console.log("Must Login to Post")
       //this.router.navigate(['/Login'])
       return
   }
   const creator=this.Loginserve.getUsername()
   this.qs.post(title,body,creator)

  }

  postcomment(body,Postitle)
  {

    const creator=this.Loginserve.getUsername()
    this.qs.comment(body,creator,Postitle)
  }


  getallpost()
  {
    this.qs.getallposts().subscribe((data:any)=>{
      this.employees=data

    })

  }

}
