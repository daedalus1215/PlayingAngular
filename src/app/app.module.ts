import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Custom Courses
import { CoursesComponent } from "./courses-component/courses.component";
import { AuthorComponent } from "./author-component/author.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
