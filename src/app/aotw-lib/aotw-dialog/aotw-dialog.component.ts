// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aotw-dialog',
  templateUrl: './aotw-dialog.component.html',
  styleUrls: ['./aotw-dialog.component.scss']
})
export class AotwDialogComponent {
  @Input() dialogTitle = '';
  @Input() scrim = true;
  @Output() closed = new EventEmitter<void>();

  constructor() { }

  close(): void {
    this.closed.next();
  }
}
