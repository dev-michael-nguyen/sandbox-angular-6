import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-bar-button',
  templateUrl: './icon-bar-button.component.html',
  styleUrls: ['./icon-bar-button.component.scss']
})
export class IconBarButtonComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() routePath: string;
}
