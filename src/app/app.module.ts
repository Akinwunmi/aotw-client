// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AotwSharedModule } from './modules/aotw-shared/aotw-shared.module';
import { AppComponent } from './app.component';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AotwSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
