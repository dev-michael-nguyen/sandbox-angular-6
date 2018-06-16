import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  leftNavWidth = '320px';
  isLeftNavOpened = true;
  leftNavData = [
    {
      title: 'My Dashboard',
      children: [
        { icon: 'fa fa-home', title: 'Home', path: '/home' },
        { icon: 'fa fa-calendar', title: 'Calendar', path: '/calendar' },
        { icon: 'fa fa-comments', title: 'Messages', path: '/messages' },
        { icon: 'fa fa-exclamation-triangle', title: 'Alerts', path: '/alerts' },
        { icon: 'fa fa-search', title: 'Search', path: '/search' },
      ]
    },
    {
      title: 'Modules',
      children: [
        { icon: 'fa fa-user', title: 'Profiles', path: '/profiles' },
        { icon: 'fa fa-vcard', title: 'Assignments', path: '/assignments' },
        { icon: 'fa fa-building', title: 'Organizations', path: '/organizations' },
        { icon: 'fa fa-users', title: 'Staffs', path: '/staffs' },
      ]
    },
    {
      title: 'Tools',
      children: [
        { icon: 'fa fa-book', title: 'Notes', path: '/notes' },
        { icon: 'fa fa-list-alt', title: 'Reports', path: '/reports' },
        { icon: 'fa fa-shield', title: 'Security', path: '/security' },
        { icon: 'fa fa-question', title: 'Help', path: '/help' },
        { icon: 'fa fa-cogs', title: 'Settings', path: '/settings' },
      ]
    },
  ];

  iconBarData = [
    { icon: 'fa fa-home', title: 'Home', path: '/home' },
    { icon: 'fa fa-calendar', title: 'Calendar', path: '/calendar' },
    { icon: 'fa fa-comments', title: 'Messages', path: '/messages' },
    { icon: 'fa fa-exclamation-triangle', title: 'Alerts', path: '/alerts' },
    { icon: 'fa fa-search', title: 'Search', path: '/search' },
  ];

  toggleLeftNav() {
    this.isLeftNavOpened = !this.isLeftNavOpened;
  }

  get appMainState() {
    this.isLeftNavOpened
      ? document.getElementById('app-main').style.marginLeft = this.leftNavWidth
      : document.getElementById('app-main').style.marginLeft = '0';

    return this.isLeftNavOpened;
  }
}
