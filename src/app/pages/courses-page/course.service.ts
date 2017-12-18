import {Injectable} from '@angular/core';
import {CourseModel} from './course/course.model';

import * as _ from 'lodash';


@Injectable()
export class CourseService {
  private courses: Array<CourseModel>;

  constructor() {
    this.courses = [
      {
        id: 1,
        title: 'First course',
        date: new Date(),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        topRated: true
      },
      {
        id: 2,
        title: 'Second course',
        date: new Date(),
        duration: 45,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        topRated: false
      },
      {
        id: 3,
        title: 'Third course',
        date: new Date(),
        duration: 110,
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        topRated: true
      }
    ];
  }

  getCoursesList(): Array<CourseModel> {
    return this.courses;
  }

  createCourse(id: number, title: string, duration: number, description: string, date: Date, topRated: boolean): boolean {
    this.courses.push(new CourseModel(id, title, duration, description, date, topRated));
    return true;
  }


  getCourseById(elementId: number): CourseModel | null {
    return _.find(this.courses, (x) => x.id === elementId);
  }

  updateCourse(course: CourseModel): boolean {
    return true;
  }

  removeCourse(elementId: number) {
    _.remove(this.courses, (x) => x.id === elementId);
  }
}


