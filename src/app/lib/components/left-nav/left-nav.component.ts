import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  @Input() width = '360px';
  @Input() showLeftNav = true;

  get leftNavState() {
    if (this.showLeftNav) {
      document.getElementById('app-left-nav').style.width = this.width;
      document.getElementById('app-main').style.marginLeft = this.width;
    } else {
      document.getElementById('app-left-nav').style.width = '0';
      document.getElementById('app-main').style.marginLeft = '0';
    }

    return this.showLeftNav;
  }

  @Input() leftNavTree: Array<object> = [];
}
