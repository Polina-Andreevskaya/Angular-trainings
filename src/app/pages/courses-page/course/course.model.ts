import {CourseInterface} from "./course.interface";

export class CourseModel implements CourseInterface {
  id: number;
  title: string;
  duration: number;
  description: string;
  date: Date;
}
