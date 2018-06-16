import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  @Input() width = '320px';
  @Input() isOpened = true;
  @Input() data: Array<object> = [];

  constructor(
    private _element: ElementRef
  ) {}

  get rootElement() {
    return this._element.nativeElement.firstElementChild;
  }

  get leftNavState() {
    this.isOpened
    ? this.rootElement.style.width = this.width
    : this.rootElement.style.width = '0';

    return this.isOpened;
  }
}
