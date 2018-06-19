import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LibModule } from '../../lib/lib.module';

@NgModule({
  imports: [
    CommonModule,
    LibModule
  ],
  declarations: [
    ErrorPageComponent
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class SystemModule { }
