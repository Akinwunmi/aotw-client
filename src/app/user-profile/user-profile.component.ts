// Copyright 2022,
// Jurrit van der Ploeg

import { Component } from '@angular/core';
import { User } from '@aotw-lib';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  // ! For testing only
  testUser: User = {
    id: 0,
    fullName: 'Jurrit van der Ploeg',
    role: 'Software Engineer'
  };

  constructor() { }
}
