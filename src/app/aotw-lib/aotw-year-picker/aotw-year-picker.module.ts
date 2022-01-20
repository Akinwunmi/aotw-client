// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { AotwYearPickerComponent } from './aotw-year-picker.component';

@NgModule({
  declarations: [
    AotwYearPickerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AotwYearPickerComponent
  ]
})
export class AotwYearPickerModule { }
