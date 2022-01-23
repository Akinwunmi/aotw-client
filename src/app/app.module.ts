// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { yearPickerReducer } from '@aotw-lib';
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
import { categoriesReducer } from './categories';
import { dynamicLayoutReducer } from './dynamic-layout';

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
      category: categoriesReducer,
      dynamicLayout: dynamicLayoutReducer,
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
