import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LandingNavbarComponent } from './components/landing/landing-navbar/landing-navbar.component'; 
import { LandingFooterComponent } from './components/landing/landing-footer/landing-footer.component'; 
import { LandingHomeComponent } from './components/landing/landing-home/landing-home.component'; 
import { LandingCoursesComponent } from './components/landing/landing-courses/landing-courses.component'; 
import { LandingTutorsComponent } from './components/landing/landing-tutors/landing-tutors.component'; 
import { LandingCourseComponent } from './components/landing/landing-course/landing-course.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component'; 
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component'; 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component'; 


@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    LandingLayoutComponent,
    LandingNavbarComponent,
    LandingFooterComponent,
    LandingHomeComponent,
    LandingCoursesComponent,
    LandingTutorsComponent,
    LandingCourseComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminLayoutComponent,
    UserRegisterComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
