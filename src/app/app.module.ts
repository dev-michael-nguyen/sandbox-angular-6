import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiPlatformModule } from '@mi-platform';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { PersonModule } from './modules/person/person.module';
import { SystemModule } from './modules/system/system.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiPlatformModule,
    HomeModule,
    PersonModule,
    SystemModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }
