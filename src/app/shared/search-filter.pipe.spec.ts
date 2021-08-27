// Copyright 2021,
// Jurrit van der Ploeg

import { Route } from '@angular/router';

import { listOfArchivesStub } from './search-filter.mock';
import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {
  const pipe = new SearchFilterPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert searchInput to lowercase', () => {
    expect(pipe.transform([], 'Foo')).toEqual([], 'foo');
  });

  it('should return corresponding item', () => {
    expect(pipe.transform(['foo', 'bar'], 'fo')).toEqual(['foo'], 'fo');
  });

  it('should return all items if searchInput is empty', () => {
    expect(pipe.transform(listOfArchivesStub, '', 'route')).toEqual(listOfArchivesStub, '');
  });

  it(`should return 'item.title' if itemType is 'route'`, () => {
    expect(pipe.transform(listOfArchivesStub, 'regio', 'route')).toEqual(
      [
        {
          path: 'regions' as Route,
          title: 'Regions of the World',
        }
      ],
      'regio'
    );
  });
});
