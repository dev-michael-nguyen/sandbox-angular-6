import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  leftNavWidth = '360px';
  isLeftNavOpened = true;
  leftNavData = [
    {
      displayName: 'LTSS',
      children: [
        { icon: 'fa fa-home', displayName: 'Home', path: '/home' },
        { icon: 'fa fa-calendar', displayName: 'Calendar', path: '/calendar' },
        { icon: 'fa fa-comments', displayName: 'Messages', path: '/messages' },
        { icon: 'fa fa-exclamation-triangle', displayName: 'Alerts', path: '/alerts' },
      ]
    },
    {
      displayName: 'Program Management',
      children: [
        { icon: 'fa fa-user', displayName: 'Persons', path: '/persons' },
        { icon: 'fa fa-vcard', displayName: 'Assignments', path: '/assignments' },
        { icon: 'fa fa-plus-square', displayName: 'Programs', path: '/programs' },
        { icon: 'fa fa-credit-card', displayName: 'Billing', path: '/billing' },
        { icon: 'fa fa-book', displayName: 'Progress Notes', path: '/progress-notes' },
      ]
    },
    {
      displayName: 'Administrative',
      children: [
        { icon: 'fa fa-building', displayName: 'Organizations', path: '/organizations' },
        { icon: 'fa fa-users', displayName: 'Staffs', path: '/staffs' },
        { icon: 'fa fa-map-marker', displayName: 'Location Tracker', path: '/location-tracker' },
        { icon: 'fa fa-search', displayName: 'Queries', path: '/queries' },
      ]
    },
    {
      displayName: 'Tools',
      children: [
        { icon: 'fa fa-list-alt', displayName: 'Reports', path: '/reports' },
        { icon: 'fa fa-bookmark', displayName: 'Resource Library', path: '/resource-library' },
        { icon: 'fa fa-shield', displayName: 'Security', path: '/security' },
        { icon: 'fa fa-question', displayName: 'Help', path: '/help' },
        { icon: 'fa fa-cogs', displayName: 'Settings', path: '/settings' },
      ]
    },
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
