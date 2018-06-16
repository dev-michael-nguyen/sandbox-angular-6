import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-nav-node',
  templateUrl: './left-nav-node.component.html',
  styleUrls: ['./left-nav-node.component.css']
})

export class LeftNavNodeComponent implements OnInit {
  _ACTIVE = 'active';
  _OPENED = 'opened';

  @Input() node: { children: Array<object> };

  get rootElement() {
    return this._element.nativeElement.firstElementChild as HTMLElement;
  }

  constructor(
    private _element: ElementRef,
    private _router: Router,
  ) {}

  ngOnInit () {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const leftNavLinkPath = this.rootElement.querySelector('.left-nav-link-path');
        if ((leftNavLinkPath as HTMLInputElement).value === event.urlAfterRedirects) {
          this.toggleActiveForLink(leftNavLinkPath.parentElement, { path: event.urlAfterRedirects });
        }
      }
    });
  }

  toggleActiveForLink(element, node) {
    // deactivate all other active links
    Array.from(document.querySelectorAll('.left-nav-link.active'))
      .forEach(activeLink => activeLink.classList.toggle(this._ACTIVE));
    Array.from(document.querySelectorAll('.left-nav-group-link.active'))
      .forEach(activeLink => activeLink.classList.toggle(this._ACTIVE));

    // activate this link
    element.classList.toggle(this._ACTIVE);
    this._toggleActiveForAncestorGroupLinks(element);

    // navigate route for this link
    node.path ? this._router.navigate([node.path]) : this._router.navigate(['/error']);
  }

  toggleOpenedForGroupLink(element) {
    element = element.parentElement;
    element.querySelector('.left-nav-group-link').classList.toggle(this._OPENED);
    element.querySelector('.left-nav-link-icon').classList.toggle(this._OPENED);
    const groupLinks = element.querySelector('.left-nav-group-links');
    const isOpenedGroupLinks = groupLinks.classList.toggle(this._OPENED);
    this._adjustHeightForAncestorGroupLinks(element, isOpenedGroupLinks ? groupLinks.scrollHeight : groupLinks.scrollHeight * -1);
    this._adjustHeightForGroupLinks(element, isOpenedGroupLinks ? 0 : groupLinks.scrollHeight * -1);
  }

  _toggleActiveForAncestorGroupLinks(element) {
    element = element.parentElement;
    if (!element) { return; }
    if (element.classList.contains('left-nav-group')) {
      this._toggleActiveForGroupLink(element);
    }
    this._toggleActiveForAncestorGroupLinks(element);
  }

  _toggleActiveForGroupLink(leftNavGroupElement) {
    const groupLink = leftNavGroupElement.querySelector('.left-nav-group-link');
    if (!groupLink) { return; }
    if (!groupLink.classList.contains(this._OPENED)) {
      this.toggleOpenedForGroupLink(groupLink);
    }
    groupLink.classList.toggle(this._ACTIVE);
  }

  _adjustHeightForAncestorGroupLinks(element, height) {
    element = element.parentElement;
    if (!element) { return; }
    if (element.classList.contains('left-nav-group')) {
      this._adjustHeightForGroupLinks(element, height);
    }
    this._adjustHeightForAncestorGroupLinks(element, height);
  }

  _adjustHeightForGroupLinks(leftNavGroupElement, height?) {
    const _height = height || 0;
    const groupLinks = leftNavGroupElement.querySelector('.left-nav-group-links');
    if (!groupLinks) { return; }
    groupLinks.style.height = (groupLinks.scrollHeight + _height) + 'px';
  }
}
