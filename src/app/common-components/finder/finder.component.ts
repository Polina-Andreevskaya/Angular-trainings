import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  @Output() onSearchCourse: EventEmitter<string> = new EventEmitter<string>();

  public courseToSearch: string;

  constructor() {
  }

  ngOnInit() {
  }

  search(value: string) {
    if (!value) {
      return;
    }
    // console.log(value);
    this.onSearchCourse.emit(value);
  }

}
