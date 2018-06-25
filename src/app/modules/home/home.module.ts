import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPlatformModule } from '@mi-platform';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    MiPlatformModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
