import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LeftNavNodeComponent } from './components/left-nav-node/left-nav-node.component';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LeftNavComponent,
    LeftNavNodeComponent,
    IconBarComponent,
  ],
  exports: [
    LeftNavComponent,
    LeftNavNodeComponent,
    IconBarComponent
  ]
})

export class LibModule { }
