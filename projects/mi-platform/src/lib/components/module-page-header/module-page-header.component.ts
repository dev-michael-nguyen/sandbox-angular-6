import { Component, Input } from '@angular/core';

@Component({
  selector: 'mi-platform-module-page-header',
  templateUrl: './module-page-header.component.html',
  styleUrls: ['./module-page-header.component.scss']
})
export class ModulePageHeaderComponent {
  @Input() title: string;
  @Input() bgcError = false;
}
