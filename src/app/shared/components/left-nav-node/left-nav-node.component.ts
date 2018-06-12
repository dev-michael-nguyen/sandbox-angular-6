import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav-node',
  templateUrl: './left-nav-node.component.html',
  styleUrls: ['./left-nav-node.component.css']
})

export class LeftNavNodeComponent {
  @Input()
  node : object = {};

  toggleNode(element) {
    var isActiveGroup = element.querySelector("a").classList.toggle("active");
    var groupIcon = element.querySelector(".left-nav-group-icon");
    isActiveGroup
      ? groupIcon.innerHTML = "&#9660;"
      : groupIcon.innerHTML = "&#9658;";

    var groupLinks = element.querySelector(".left-nav-group-links");
    var isActiveGroupLinks = groupLinks.classList.toggle("active");;
    _adjustAncestorGroupLinksHeight(element, isActiveGroupLinks ? groupLinks.scrollHeight : groupLinks.scrollHeight*-1);
    _adjustGroupLinksHeight(element, isActiveGroupLinks ? 0 : groupLinks.scrollHeight*-1);
  }
}

function _adjustAncestorGroupLinksHeight(el, height) {
  el = el.parentElement;
  if (!el) { return; }
  el.classList.contains("left-nav-group") ? _adjustGroupLinksHeight(el, height) : null;
  _adjustAncestorGroupLinksHeight(el, height);
}

function _adjustGroupLinksHeight(el, height?){
  const _height = height || 0;
  const groupLinks = el.querySelector(".left-nav-group-links");
  if (!groupLinks) { return; }
  groupLinks.style.height = (groupLinks.scrollHeight + _height) + "px";
}
