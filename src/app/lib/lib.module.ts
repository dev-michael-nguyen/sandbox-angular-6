import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LeftNavNodeComponent } from './components/left-nav-node/left-nav-node.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    LeftNavComponent,
    LeftNavNodeComponent,
  ],
  exports: [
    LeftNavComponent,
    LeftNavNodeComponent,
  ]
})

export class LibModule { }
