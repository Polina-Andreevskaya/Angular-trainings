import {Component, OnInit} from '@angular/core';
import {CourseModel} from './course/course.model';
import {CourseService} from './course.service';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  protected courses: Array<CourseModel>;
  protected isModalDialogVisible = false;
  private elementToDelete: number;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCoursesList();
  }

  onElementDeleted(elementId: number) {
    this.showDialog();
    this.elementToDelete = elementId;
  }

  public showDialog() {
    this.isModalDialogVisible = true;
  }

  public closeModal(isConfirmed: boolean) {
    this.isModalDialogVisible = false;

    if (isConfirmed) {
      this.courseService.removeCourse(this.elementToDelete);
    }

  }
}
