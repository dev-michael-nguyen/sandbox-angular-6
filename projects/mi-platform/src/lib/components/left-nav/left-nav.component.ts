import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'mi-platform-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  @Input() data: Array<object> = [];

  constructor(
    private _el: ElementRef
  ) {}

  get rootEl() {
    return this._el.nativeElement.firstElementChild as HTMLElement;
  }
}
