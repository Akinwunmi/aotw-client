// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CategoriesService } from '../categories';

@Injectable({
  providedIn: 'root'
})
export class VisualService {

  constructor(
    private categoriesService: CategoriesService
  ) { }

  fetchVisual(itemPath: string): string {
    const category = this.categoriesService.category;
    return `${environment.endpoints.visuals.path}aotw-${category}/${itemPath}.svg`;
  }

  convertStringToSlug(value: string): string {
    value = value.toLowerCase().replace(/^\s+|\s+$/g, ''); // trim string

    const from = 'àáãäâèéëêėìíïîòóöôōùúüûñçšž·,:;/';
    const into = 'aaaaaeeeeeiiiiooooouuuuncsz_____';

    for (let i = 0; i < from.length; i++) {
      value = value.replace(new RegExp(from.charAt(i), 'g'), into.charAt(i));
    }

    value = value
      .replace(/\'/g, '') // remove single quotes
      .replace(/\s+/g, '_') // collapse whitespace and replace by underscore
      .replace(/_+/g, '_') // collapse underscores
      .replace(/-+/g, '-'); // collapse dashes

    return value;
  }
}
