// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AotwSharedModule } from './modules/aotw-shared/aotw-shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AotwSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
