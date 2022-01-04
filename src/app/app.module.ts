// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CategoriesModule } from './categories';
import { ItemsModule } from './items';
import { SharedModule } from './shared/shared.module';
// services
import { HttpErrorInterceptor } from './http-error-interceptor';
// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CategoriesModule,
    HttpClientModule,
    ItemsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
