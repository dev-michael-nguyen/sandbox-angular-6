import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar-title',
  templateUrl: './action-bar-title.component.html',
  styleUrls: ['./action-bar-title.component.scss']
})
export class ActionBarTitleComponent {
  @Input() icon: string;
  @Input() title: string;
}
