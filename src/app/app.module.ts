import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LibModule } from './lib/lib.module';
import { HomeModule } from './modules/home/home.module';
import { SystemModule } from './modules/system/system.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    HomeModule,
    SystemModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }
