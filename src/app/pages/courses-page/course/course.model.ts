import {CourseInterface} from './course.interface';

export class CourseModel implements CourseInterface {
  constructor(public id: number,
              public title: string,
              public duration: number,
              public description: string,
              public date: Date
  ) {}
}
