import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  @Input() showLeftNav = true;

  get leftNavState() {
    if (this.showLeftNav) {
      document.getElementById('app-left-nav').style.width = '320px';
      document.getElementById('app-main').style.marginLeft = '320px';
    } else {
      document.getElementById('app-left-nav').style.width = '0';
      document.getElementById('app-main').style.marginLeft = '0';
    }

    return this.showLeftNav;
  }

  leftNavTree = [
    {
      displayName: 'Home',
      path: '/home'
    },
    {
      displayName: 'Group A',
      children: [
        {
          displayName: 'Group C',
          children: [
            {
              displayName: 'Group D',
              children: [
                {
                  displayName: 'Link D1'
                },
                {
                  displayName: 'Link D2'
                },
                {
                  displayName: 'Link D3'
                }
              ]
            },
            {
              displayName: 'Link C2'
            },
            {
              displayName: 'Link C3'
            }
          ]
        },
        {
          displayName: 'Link A2'
        },
        {
          displayName: 'Link A3'
        }
      ]
    },
    {
      displayName: 'Group B',
      children: [
        {
          displayName: 'Link B1'
        },
        {
          displayName: 'Link B2'
        },
        {
          displayName: 'Link B3'
        }
      ]
    }
  ];
}
