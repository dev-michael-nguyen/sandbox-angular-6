import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent implements OnInit {
  _ACTIVE = 'active';

  @Input() data: Array<object> = [];

  get rootEl() {
    return this._elRef.nativeElement.firstElementChild as HTMLElement;
  }

  constructor(
    private _elRef: ElementRef,
    private _router: Router
  ) {}

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        Array.from(this.rootEl.querySelectorAll('.icon-bar-button-path'))
          .filter(el => (el as HTMLInputElement).value === event.urlAfterRedirects)
          .forEach(el => this.toggleButton(el.parentElement, { path: event.urlAfterRedirects }));
      }
    });
  }

  toggleButton(el, val) {
    Array.from(this.rootEl.querySelectorAll('.icon-bar-button.active'))
      .forEach(b => b.classList.toggle(this._ACTIVE));

    el.classList.toggle(this._ACTIVE);

    val.routePath ? this._router.navigate([val.routePath]) : this._router.navigate(['/error']);
  }
}
