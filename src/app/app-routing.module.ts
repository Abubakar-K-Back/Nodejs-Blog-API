import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { SignupComponent } from './signup/signup.component';
import { PitchbookComponent } from './pitchbook/pitchbook.component';


const routes: Routes = [
{

  path:'Login',
  component:LoginComponent,

},
{
  path:'Questions',
  component:QuestionsComponent,


},
{
  path:'SignUp',
  component:SignupComponent,

},
{

  path:"PitchBook",
  component:PitchbookComponent
},

{

  path:"Home",
  component:PitchbookComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
