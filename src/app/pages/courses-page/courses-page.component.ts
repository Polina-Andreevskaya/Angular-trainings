import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CourseModel} from './course/course.model';
import {CourseService} from './course.service';
import {FilterByPipe} from '../../Common-components/filter-by.pipe';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPageComponent {

  public courses: Array<CourseModel>;
  public isModalDialogVisible = false;
  private elementToDelete: number;
  private modal = {
    header: 'Delete course',
    description: 'Do you really want to delete this course?'
  };
  showButton: boolean;

  constructor(private courseService: CourseService,
              private filterBy: FilterByPipe
  ) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCoursesList();
  }

  onElementDeleted(elementId: number) {
    this.showDialog();
    this.elementToDelete = elementId;
  }

  showDialog() {
    this.isModalDialogVisible = true;
  }

  closeModal(isConfirmed: boolean) {
    this.isModalDialogVisible = false;
    if (isConfirmed) {
      this.courseService.removeCourse(this.elementToDelete);
    }
  }

  searchCourse(courseToSearch: string) {
    let length = this.courses.length;
    this.courses = this.filterBy.transform<CourseModel>(this.courses, 'title', courseToSearch);
    if (length === this.courses.length) return;
    this.showButton = true;
  }

  getCourses() {
    this.courses = this.courseService.getCoursesList();
    this.showButton = false;
  }
}
