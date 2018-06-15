import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorPageComponent
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class SystemModule { }
