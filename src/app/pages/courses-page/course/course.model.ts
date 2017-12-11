import {CourseInterface} from './course.interface';

export class CourseModel implements CourseInterface {
  id: number;
  title: string;
  duration: number;
  description: string;
  date: Date;

  constructor(id: number, title: string, duration: number, description: string, date: Date) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.description = description;
    this.date = date;
  }
}
