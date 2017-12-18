import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CourseModel} from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: CourseModel;
  @Output() elementDeleted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(course: CourseModel) {
    this.elementDeleted.emit(course.id);
  }

}
