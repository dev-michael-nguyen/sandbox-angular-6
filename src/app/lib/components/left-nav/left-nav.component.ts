import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  @Input() width = '360px';
  @Input() isOpened = true;
  @Input() data: Array<object> = [];

  constructor(
    private elementRef: ElementRef
  ) {}

  get leftNavElement() {
    return this.elementRef.nativeElement.firstElementChild;
  }

  get leftNavState() {
    this.isOpened
    ? this.leftNavElement.style.width = this.width
    : this.leftNavElement.style.width = '0';

    return this.isOpened;
  }
}
