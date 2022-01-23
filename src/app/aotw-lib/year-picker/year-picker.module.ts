// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { YearPickerComponent } from './year-picker.component';

@NgModule({
  declarations: [
    YearPickerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    YearPickerComponent
  ]
})
export class YearPickerModule { }
