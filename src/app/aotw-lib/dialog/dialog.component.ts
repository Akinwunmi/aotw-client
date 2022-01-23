// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aotw-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() dialogTitle!: string;
  @Input() scrim = true;
  @Output() closed = new EventEmitter<void>();

  constructor() { }

  close(): void {
    this.closed.next();
  }
}
