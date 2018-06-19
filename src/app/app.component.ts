import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  leftNavData = [
    {
      title: 'My Dashboard',
      children: [
        { icon: 'fa fa-home', title: 'Home', routePath: '/home' },
        { icon: 'fa fa-calendar', title: 'Calendar', routePath: '/calendar' },
        { icon: 'fa fa-comments', title: 'Messages', routePath: '/messages' },
        { icon: 'fa fa-exclamation-triangle', title: 'Alerts', routePath: '/alerts' },
        { icon: 'fa fa-search', title: 'Search', routePath: '/search' },
      ]
    },
    {
      title: 'Modules',
      children: [
        { icon: 'fa fa-user', title: 'Profiles', routePath: '/profiles' },
        { icon: 'fa fa-vcard', title: 'Assignments', routePath: '/assignments' },
        { icon: 'fa fa-building', title: 'Organizations', routePath: '/organizations' },
        { icon: 'fa fa-users', title: 'Staffs', routePath: '/staffs' },
      ]
    },
    {
      title: 'Tools',
      children: [
        { icon: 'fa fa-book', title: 'Notes', routePath: '/notes' },
        { icon: 'fa fa-list-alt', title: 'Reports', routePath: '/reports' },
        { icon: 'fa fa-shield', title: 'Security', routePath: '/security' },
        { icon: 'fa fa-question', title: 'Help', routePath: '/help' },
        { icon: 'fa fa-cogs', title: 'Settings', routePath: '/settings' },
      ]
    },
  ];

  iconBarData = [
    { icon: 'fa fa-home', title: 'Home', routePath: '/home' },
    { icon: 'fa fa-calendar', title: 'Calendar', routePath: '/calendar' },
    { icon: 'fa fa-comments', title: 'Messages', routePath: '/messages' },
    { icon: 'fa fa-exclamation-triangle', title: 'Alerts', routePath: '/alerts' },
    { icon: 'fa fa-search', title: 'Search', routePath: '/search' },
  ];

  showLeftNav = true;
  toggleLeftNav() {
    this.showLeftNav = !this.showLeftNav;
  }
}
