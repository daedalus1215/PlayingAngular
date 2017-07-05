import { Component } from '@angular/core';
import { CourseService } from './courses.service';


@Component({
    selector: "courses",
    templateUrl: "./courses.component.html",
    providers: [CourseService]
})
export class CoursesComponent {
    title: "Courses Component";
    courses;

    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}