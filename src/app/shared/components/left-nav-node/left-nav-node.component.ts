import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-nav-node',
  templateUrl: './left-nav-node.component.html',
  styleUrls: ['./left-nav-node.component.css']
})

export class LeftNavNodeComponent implements OnInit {
  @Input() node: { children: Array<object> };

  constructor(
    private router: Router,
  ) {}

  ngOnInit () {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        Array.from(document.querySelectorAll('.left-nav-link-path'))
          .filter(elem => !elem.parentElement.classList.contains('active') && (elem as HTMLInputElement).value === event.urlAfterRedirects)
          .forEach(elem => this.toggleLink(elem.parentElement, { path: event.urlAfterRedirects }));
      }
    });
  }

  toggleLink(element, node) {
    // deactivate all other active links
    Array.from(document.querySelectorAll('.left-nav-link.active'))
      .forEach(activeLink => activeLink.classList.toggle('active'));
    Array.from(document.querySelectorAll('.left-nav-group-link.active'))
      .forEach(activeLink => activeLink.classList.toggle('active'));

    // activate this link
    element.classList.toggle('active');
    _toggleActiveForAncestorGroupLinks(element);

    // navigate route for this link
    node.path ? this.router.navigate([node.path]) : this.router.navigate(['/error']);
  }

  toggleGroupLink(element) {
    element.querySelector('.left-nav-group-link').classList.toggle('opened');
    element.querySelector('.left-nav-link-icon').classList.toggle('opened');
    const groupLinks = element.querySelector('.left-nav-group-links');
    const isOpenedGroupLinks = groupLinks.classList.toggle('opened');
    _adjustHeightForAncestorGroupLinks(element, isOpenedGroupLinks ? groupLinks.scrollHeight : groupLinks.scrollHeight * -1);
    _adjustHeightForGroupLinks(element, isOpenedGroupLinks ? 0 : groupLinks.scrollHeight * -1);
  }
}

function _toggleActiveForAncestorGroupLinks(el) {
  el = el.parentElement;
  if (!el) { return; }
  if (el.classList.contains('left-nav-group')) {
    _toggleActiveForGroupLink(el);
  }
  _toggleActiveForAncestorGroupLinks(el);
}

function _toggleActiveForGroupLink(leftNavGroupElement) {
  const groupLink = leftNavGroupElement.querySelector('.left-nav-group-link');
  if (!groupLink) { return; }
  groupLink.classList.toggle('active');
}

function _adjustHeightForAncestorGroupLinks(el, height) {
  el = el.parentElement;
  if (!el) { return; }
  if (el.classList.contains('left-nav-group')) {
    _adjustHeightForGroupLinks(el, height);
  }
  _adjustHeightForAncestorGroupLinks(el, height);
}

function _adjustHeightForGroupLinks(leftNavGroupElement, height?) {
  const _height = height || 0;
  const groupLinks = leftNavGroupElement.querySelector('.left-nav-group-links');
  if (!groupLinks) { return; }
  groupLinks.style.height = (groupLinks.scrollHeight + _height) + 'px';
}
