import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LandingHomeComponent } from './components/landing/landing-home/landing-home.component'; 
import { LandingCoursesComponent } from './components/landing/landing-courses/landing-courses.component'; 
import { LandingTutorsComponent } from './components/landing/landing-tutors/landing-tutors.component'; 
import { LandingCourseComponent } from './components/landing/landing-course/landing-course.component'; 
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component'; 
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component'; 
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
const routes: Routes = [
  {
  path:"",component:LandingLayoutComponent,
  children:[
    {path:"home",component:LandingHomeComponent},
    {path:"courses",component:LandingCoursesComponent},
    {path:"tutors",component:LandingTutorsComponent},
    {path:"course",component:LandingCourseComponent}
  ]
  },
  {
    path: 'user/login', component:UserLoginComponent
  },
  {
    path: 'user/register',component: UserRegisterComponent,
  },
{
  path: 'admin/login', component:AdminLoginComponent
},
{
  path: 'admin/register',component: AdminRegisterComponent,
},
{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
