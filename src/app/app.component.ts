import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  myFavorites = [
    { icon: 'fa fa-home', title: 'Home', routePath: '/home-page' },
    { icon: 'fa fa-calendar', title: 'Calendar', routePath: '/calendar-page' },
    { icon: 'fa fa-comments', title: 'Messages', routePath: '/messages-page' },
    { icon: 'fa fa-exclamation-triangle', title: 'Alerts', routePath: '/alerts-page' },
    { icon: 'fa fa-user', title: 'Persons', routePath: '/persons-page' },
    { icon: 'fa fa-search', title: 'Search', routePath: '/search-page' },
  ];

  leftNavData = [
    {
      title: 'My Favorites',
      children: this.myFavorites
    },
    {
      title: 'Modules',
      children: [
        { icon: 'fa fa-user', title: 'Persons', routePath: '/persons-page' },
        { icon: 'fa fa-vcard', title: 'Assignments', routePath: '/assignments-page' },
        { icon: 'fa fa-building', title: 'Organizations', routePath: '/organizations-page' },
        { icon: 'fa fa-users', title: 'Staffs', routePath: '/staffs-page' },
      ]
    },
    {
      title: 'Tools',
      children: [
        { icon: 'fa fa-book', title: 'Notes', routePath: '/notes-page' },
        { icon: 'fa fa-list-alt', title: 'Reports', routePath: '/reports-page' },
        { icon: 'fa fa-shield', title: 'Security', routePath: '/security-page' },
        { icon: 'fa fa-question', title: 'Help', routePath: '/help-page' },
        { icon: 'fa fa-cogs', title: 'Settings', routePath: '/settings-page' },
      ]
    },
  ];

  iconBarData = this.myFavorites;

  showLeftNav = true;
  toggleLeftNav() {
    this.showLeftNav = !this.showLeftNav;
  }
}
