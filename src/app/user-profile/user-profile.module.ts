// Copyright 2022,
// Jurrit van der Ploeg

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@aotw-lib';

import { SharedModule } from '../shared';

import { FavoritesModule } from './favorites';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    FavoritesModule,
    SharedModule,
    UserProfileRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserProfileModule { }
