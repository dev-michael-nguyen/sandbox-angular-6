import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPlatformModule } from 'mi-platform';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule,
    MiPlatformModule
  ],
  declarations: [
    ErrorPageComponent
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class SystemModule { }
