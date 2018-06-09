import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showLeftNav = true;
  toggleLeftNav() {
    this.showLeftNav = !this.showLeftNav;
  }
  get leftNavState() {
    if (this.showLeftNav) {
      document.getElementById("app-left-nav").style.width = "320px";
      document.getElementById("app-main").style.marginLeft = "320px";
    } else {
      document.getElementById("app-left-nav").style.width = "0";
      document.getElementById("app-main").style.marginLeft = "0";
    }

    return this.showLeftNav;
  }
}
