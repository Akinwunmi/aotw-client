// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisualService {

  constructor() { }

  fetchVisual(itemPath: string, fileType?: string): string {
    const fileExtension = fileType ?? 'svg';
    return `${environment.endpoints.visuals.path}aotw-${itemPath}.${fileExtension}`;
  }
}
