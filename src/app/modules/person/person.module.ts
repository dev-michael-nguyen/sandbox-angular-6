import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPlatformModule } from '@mi-platform';
import { PersonPageComponent } from './components/person-page/person-page.component';

@NgModule({
  imports: [
    CommonModule,
    MiPlatformModule
  ],
  declarations: [
    PersonPageComponent
  ],
  exports: [
    PersonPageComponent
  ]
})
export class PersonModule { }
