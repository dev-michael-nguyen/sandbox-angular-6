import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-nav-node',
  templateUrl: './left-nav-node.component.html',
  styleUrls: ['./left-nav-node.component.css']
})

export class LeftNavNodeComponent {
  _ACTIVE = 'active';
  _OPENED = 'opened';

  @Input() node: { children: Array<object> };

  get rootElement() {
    return this._element.nativeElement.firstElementChild as HTMLElement;
  }

  constructor(
    private _element: ElementRef,
    private _router: Router,
  ) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const leftNavLinkPath = this.rootElement.querySelector('.left-nav-link-path');
        if ((leftNavLinkPath as HTMLInputElement).value === event.urlAfterRedirects) {
          this.toggleActiveForLink(leftNavLinkPath.parentElement, { path: event.urlAfterRedirects });
        }
      }
    });
  }

  toggleActiveForLink(linkEl, node) {
    // deactivate all other active links
    Array.from(document.querySelectorAll('.left-nav-link.active'))
      .forEach(activeLink => activeLink.classList.toggle(this._ACTIVE));
    Array.from(document.querySelectorAll('.left-nav-group-link.active'))
      .forEach(activeLink => activeLink.classList.toggle(this._ACTIVE));

    // activate this link
    this._toggleActiveForAncestorGroupLinks(linkEl);
    linkEl.classList.toggle(this._ACTIVE);

    // navigate route for this link
    node.path ? this._router.navigate([node.path]) : this._router.navigate(['/error']);
  }

  toggleOpenedForGroupLink(groupLinkEl) {
    const groupEl = groupLinkEl.parentElement;
    groupEl.querySelector('.left-nav-group-link').classList.toggle(this._OPENED);
    groupEl.querySelector('.left-nav-link-icon').classList.toggle(this._OPENED);
    const groupLinksEl = groupEl.querySelector('.left-nav-group-links');
    const isOpened = groupLinksEl.classList.toggle(this._OPENED);
    this._adjustHeightForAncestorGroupLinks(groupEl, isOpened ? groupLinksEl.scrollHeight : groupLinksEl.scrollHeight * -1);
    this._adjustHeightForGroupLinks(groupEl, isOpened ? 0 : groupLinksEl.scrollHeight * -1);
  }

  _toggleActiveForAncestorGroupLinks(el) {
    el = el.parentElement;
    if (!el) { return; }
    this._toggleActiveForAncestorGroupLinks(el);
    if (el.classList.contains('left-nav-group')) {
      this._toggleActiveForGroupLink(el);
    }
  }

  _toggleActiveForGroupLink(groupEl) {
    const groupLinkEl = groupEl.querySelector('.left-nav-group-link');
    if (!groupLinkEl) { return; }
    const isActive = groupLinkEl.classList.toggle(this._ACTIVE);
    if (isActive && !groupLinkEl.classList.contains(this._OPENED)) {
      // TBI: This doesn't work well for nested group, need to think of another way
      this.toggleOpenedForGroupLink(groupLinkEl);
    }
  }

  _adjustHeightForAncestorGroupLinks(el, height) {
    el = el.parentElement;
    if (!el) { return; }
    if (el.classList.contains('left-nav-group')) {
      this._adjustHeightForGroupLinks(el, height);
    }
    this._adjustHeightForAncestorGroupLinks(el, height);
  }

  _adjustHeightForGroupLinks(groupEl, height?) {
    const _height = height || 0;
    const groupLinksEl = groupEl.querySelector('.left-nav-group-links');
    if (!groupLinksEl) { return; }
    groupLinksEl.style.height = (groupLinksEl.scrollHeight + _height) + 'px';
  }
}
