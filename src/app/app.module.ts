import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CaNavComponent } from './shared/ca-nav/ca-nav.component';
import { CaHomeComponent } from './sections/ca-home/ca-home.component';

import { routing, appRoutingProviders } from './app.routes';
import { Ca404Component } from './shared/ca-404/ca-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CaNavComponent,
    CaHomeComponent,
    Ca404Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
