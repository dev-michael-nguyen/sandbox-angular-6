import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { LibModule } from '../../lib/lib.module';

@NgModule({
  imports: [
    CommonModule,
    LibModule
  ],
  declarations: [
    PersonPageComponent
  ],
  exports: [
    PersonPageComponent
  ]
})
export class PersonModule { }
