import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';
import { CourseComponent } from './Pages/courses-page/course/course.component';
import { CommonComponentsModule } from './Common-components/common-components.module';
import { CourseDetailsPageComponent } from './Pages/course-details-page/course-details-page.component';

import {CourseService} from './Pages/courses-page/course.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CoursesPageComponent,
    CourseComponent,
    CourseDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
