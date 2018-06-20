import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar-button',
  templateUrl: './action-bar-button.component.html',
  styleUrls: ['./action-bar-button.component.scss']
})
export class ActionBarButtonComponent {
  @Input() icon: string;
  @Input() title: string;
}
