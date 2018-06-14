import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftNavNodeComponent } from './shared/components/left-nav-node/left-nav-node.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavNodeComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
