import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { IconBarButtonComponent } from './components/icon-bar-button/icon-bar-button.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LeftNavNodeComponent } from './components/left-nav-node/left-nav-node.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IconBarComponent,
    IconBarButtonComponent,
    LeftNavComponent,
    LeftNavNodeComponent,
  ],
  exports: [
    IconBarComponent,
    IconBarButtonComponent,
    LeftNavComponent,
    LeftNavNodeComponent,
  ]
})

export class LibModule { }
