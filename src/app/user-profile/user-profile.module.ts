// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { FavoritesModule } from './favorites';

@NgModule({
  declarations: [],
  imports: [
    FavoritesModule,
    SharedModule
  ]
})
export class UserProfileModule { }
