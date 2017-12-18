import {Directive, OnInit, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() createdDate: Date;
  private currentDate = new Date();
  private twoWeeksAgo = new Date(this.currentDate.getTime() - 1000 * 3600 * 24 * 14);

  constructor(private elemRef: ElementRef) {
  }

  ngOnInit() {
    if (this.createdDate > this.currentDate) {
      this.elemRef.nativeElement.classList.add('upcomingCourse');
      return;
    } else if (this.createdDate >= this.twoWeeksAgo) {
      this.elemRef.nativeElement.classList.add('freshCourse');
    }
  }
}
