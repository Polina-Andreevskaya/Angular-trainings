import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  public courseToSearch: string;

  constructor() {
  }

  ngOnInit() {
  }

  search(value: string) {
    if (!value) {
      return;
    }
    console.log(value);
  }

}
