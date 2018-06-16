import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent {
  @Input() showTitle = true;
  @Input() data: Array<object> = [];
}
