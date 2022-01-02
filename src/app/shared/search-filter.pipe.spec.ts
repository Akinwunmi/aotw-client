// Copyright 2022,
// Jurrit van der Ploeg

import { archivesStub, regionsStub } from './search-filter.mock';
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
    expect(pipe.transform(archivesStub, '', 'route')).toEqual(archivesStub, '');
  });

  it(`should return 'item.title' if itemType is 'route'`, () => {
    expect(pipe.transform(archivesStub, 'regio', 'route')).toEqual(
      [
        {
          path: 'regions',
          title: 'Regions of the World',
        }
      ],
      'regio'
    );
  });

  it(`should return 'item.name' if itemType is 'region'`, () => {
    expect(pipe.transform(regionsStub, 'nigeri', 'region')).toEqual(
      [regionsStub[1]],
      'nigeri'
    );
  });
});
