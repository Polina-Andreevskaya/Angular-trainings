import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() appBorderColor: string;

  constructor() { }

  ngOnInit() {
console.log(this.appBorderColor);
//   console.log(this.elementRef.nativeElement);
  }
}
