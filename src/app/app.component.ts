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
      title: 'LTSS',
      children: [
        { icon: 'fa fa-home', title: 'Home', path: '/home' },
        { icon: 'fa fa-calendar', title: 'Calendar', path: '/calendar' },
        { icon: 'fa fa-comments', title: 'Messages', path: '/messages' },
        { icon: 'fa fa-exclamation-triangle', title: 'Alerts', path: '/alerts' },
        { icon: 'fa fa-search', title: 'Search', path: '/search' },
      ]
    },
    {
      title: 'Program Management',
      children: [
        { icon: 'fa fa-user', title: 'Persons', path: '/persons' },
        { icon: 'fa fa-vcard', title: 'Assignments', path: '/assignments' },
        { icon: 'fa fa-plus-square', title: 'Programs', path: '/programs' },
        { icon: 'fa fa-credit-card', title: 'Billing', path: '/billing' },
        { icon: 'fa fa-book', title: 'Progress Notes', path: '/progress-notes' },
      ]
    },
    {
      title: 'Administrative',
      children: [
        { icon: 'fa fa-building', title: 'Organizations', path: '/organizations' },
        { icon: 'fa fa-users', title: 'Staffs', path: '/staffs' },
        { icon: 'fa fa-map-marker', title: 'Location Tracker', path: '/location-tracker' },
        { icon: 'fa fa-search', title: 'Queries', path: '/queries' },
      ]
    },
    {
      title: 'Tools',
      children: [
        { icon: 'fa fa-list-alt', title: 'Reports', path: '/reports' },
        { icon: 'fa fa-bookmark', title: 'Resource Library', path: '/resource-library' },
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
    { icon: 'fa fa-user', title: 'Persons', path: '/persons' },
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
