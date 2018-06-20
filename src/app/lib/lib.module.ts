import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { ActionBarButtonComponent } from './components/action-bar-button/action-bar-button.component';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { IconBarButtonComponent } from './components/icon-bar-button/icon-bar-button.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LeftNavNodeComponent } from './components/left-nav-node/left-nav-node.component';
import { ModulePageHeaderComponent } from './components/module-page-header/module-page-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ActionBarComponent,
    ActionBarButtonComponent,
    IconBarComponent,
    IconBarButtonComponent,
    LeftNavComponent,
    LeftNavNodeComponent,
    ModulePageHeaderComponent,
  ],
  exports: [
    ActionBarComponent,
    ActionBarButtonComponent,
    IconBarComponent,
    IconBarButtonComponent,
    LeftNavComponent,
    LeftNavNodeComponent,
    ModulePageHeaderComponent,
  ]
})

export class LibModule { }
