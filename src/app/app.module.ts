import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CaNavComponent } from './shared/ca-nav/ca-nav.component';
import { CaMapComponent } from './shared/ca-map/ca-map.component';

import { CaHomeComponent } from './sections/ca-home/ca-home.component';
import { Ca404Component } from './sections/ca-404/ca-404.component';

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CaNavComponent,
    CaHomeComponent,
    Ca404Component,
    CaMapComponent
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
