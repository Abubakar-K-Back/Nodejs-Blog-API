


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { SignupService } from "./signup/signup.service";

import { FormsModule,ReactiveFormsModule,  } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { PitchbookComponent } from './pitchbook/pitchbook.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from "./login/login.services";
import { QuestionsService } from './questions/questions.services';
import { CookieService } from "ngx-cookie-service";




@NgModule({
  declarations: [
    AppComponent,

    QuestionsComponent,
    PitchbookComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [SignupService,LoginService,QuestionsService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
