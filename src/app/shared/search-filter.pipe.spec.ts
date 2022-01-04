// Copyright 2022,
// Jurrit van der Ploeg

import { itemsStub } from './search-filter.mock';
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
    expect(pipe.transform(itemsStub, '', 'route')).toEqual(itemsStub, '');
  });

  it('should return "item.name" if itemType is "region"', () => {
    expect(pipe.transform(itemsStub, 'nigeri', 'region')).toEqual(
      [itemsStub[1]],
      'nigeri'
    );
  });
});
