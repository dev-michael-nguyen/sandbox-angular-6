import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { ActionBarButtonComponent } from './components/action-bar-button/action-bar-button.component';
import { ActionBarTitleComponent } from './components/action-bar-title/action-bar-title.component';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { IconBarButtonComponent } from './components/icon-bar-button/icon-bar-button.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LeftNavNodeComponent } from './components/left-nav-node/left-nav-node.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModulePageHeaderComponent } from './components/module-page-header/module-page-header.component';

import { ModalService } from './components/modal/modal.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ActionBarComponent,
    ActionBarButtonComponent,
    ActionBarTitleComponent,
    IconBarComponent,
    IconBarButtonComponent,
    LeftNavComponent,
    LeftNavNodeComponent,
    ModalComponent,
    ModulePageHeaderComponent,
  ],
  exports: [
    ActionBarComponent,
    ActionBarButtonComponent,
    ActionBarTitleComponent,
    IconBarComponent,
    IconBarButtonComponent,
    LeftNavComponent,
    LeftNavNodeComponent,
    ModalComponent,
    ModulePageHeaderComponent,
  ],
  providers: [ModalService]
})
export class MiPlatformModule { }
