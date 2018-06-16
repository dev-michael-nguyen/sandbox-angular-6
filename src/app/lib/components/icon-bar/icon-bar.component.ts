import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  _ACTIVE = 'active';

  @Input() showTitle = true;
  @Input() data: Array<object> = [];

  constructor(
    private _element: ElementRef,
    private _router: Router
  ) {}

  ngOnInit () {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        Array.from(this.rootElement.querySelectorAll('.icon-bar-button-path'))
          .filter(elem => !elem.parentElement.classList.contains(this._ACTIVE) &&
                          (elem as HTMLInputElement).value === event.urlAfterRedirects)
          .forEach(elem => this.toggleButton(elem.parentElement, { path: event.urlAfterRedirects }));
      }
    });
  }

  get rootElement() {
    return this._element.nativeElement.firstElementChild as HTMLElement;
  }

  toggleButton(element, val) {
    Array.from(this.rootElement.querySelectorAll('.icon-bar-button.active'))
      .forEach(b => b.classList.toggle(this._ACTIVE));

    element.classList.toggle(this._ACTIVE);

    val.path ? this._router.navigate([val.path]) : this._router.navigate(['/error']);
  }
}
