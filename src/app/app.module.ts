// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesModule } from './categories';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { ItemsModule } from './items';
import { SharedModule } from './shared';
import { activeItemReducer } from './active-item';
import { dynamicLayoutReducer } from './dynamic-layout';
import { yearPickerReducer } from './year-picker';

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
    StoreModule.forRoot({
      activeItem: activeItemReducer,
      gridColumns: dynamicLayoutReducer,
      yearSelected: yearPickerReducer
    }),
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
