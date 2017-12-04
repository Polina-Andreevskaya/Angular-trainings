import {Component, OnInit} from '@angular/core';
import {CourseModel} from "./course/course.model";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  protected courses: Array<CourseModel>;

  constructor() {
  }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'First course',
        date: new Date(),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        title: 'Second course',
        date: new Date(),
        duration: 95,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 3,
        title: 'Third course',
        date: new Date(),
        duration: 110,
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
    ];
  }

  onElementDeleted(elementId: number) {
    console.log(elementId);
  }


}
