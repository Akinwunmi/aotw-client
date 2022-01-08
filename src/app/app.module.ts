// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesModule } from './categories';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { ItemsModule } from './items';
import { SharedModule, dynamicLayoutReducer } from './shared';
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
      yearSelected: yearPickerReducer as ActionReducer<number, Action>,
      gridColumns: dynamicLayoutReducer as ActionReducer<number, Action>
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
