import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav-node',
  templateUrl: './left-nav-node.component.html',
  styleUrls: ['./left-nav-node.component.css']
})

export class LeftNavNodeComponent {
  @Input()
  node : object = {};

  toggleLink(element, node){
    Array.from(document.querySelectorAll('.left-nav-link.active'))
      .forEach(activeLink => activeLink.classList.toggle("active"));
    element.classList.toggle("active");

    Array.from(document.querySelectorAll('.left-nav-group-link.active'))
      .forEach(activeLink => activeLink.classList.toggle("active"));
    _toggleActiveForAncestorGroupLinks(element);
  }

  toggleGroupLink(element) {
    element.querySelector(".left-nav-group-link").classList.toggle("opened");
    element.querySelector(".left-nav-link-icon").classList.toggle("opened");
    var groupLinks = element.querySelector(".left-nav-group-links");
    var isOpenedGroupLinks = groupLinks.classList.toggle("opened");;
    _adjustHeightForAncestorGroupLinks(element, isOpenedGroupLinks ? groupLinks.scrollHeight : groupLinks.scrollHeight*-1);
    _adjustHeightForGroupLinks(element, isOpenedGroupLinks ? 0 : groupLinks.scrollHeight*-1);
  }
}

function _toggleActiveForAncestorGroupLinks(el) {
  el = el.parentElement;
  if (!el) { return; }
  el.classList.contains("left-nav-group") ? _toggleActiveGroupLink(el) : null;
  _toggleActiveForAncestorGroupLinks(el);
}

function _toggleActiveGroupLink(leftNavGroupElement) {
  const groupLink = leftNavGroupElement.querySelector(".left-nav-group-link");
  if (!groupLink) { return; }
  groupLink.classList.toggle("active");
}

function _adjustHeightForAncestorGroupLinks(el, height) {
  el = el.parentElement;
  if (!el) { return; }
  el.classList.contains("left-nav-group") ? _adjustHeightForGroupLinks(el, height) : null;
  _adjustHeightForAncestorGroupLinks(el, height);
}

function _adjustHeightForGroupLinks(leftNavGroupElement, height?){
  const _height = height || 0;
  const groupLinks = leftNavGroupElement.querySelector(".left-nav-group-links");
  if (!groupLinks) { return; }
  groupLinks.style.height = (groupLinks.scrollHeight + _height) + "px";
}
