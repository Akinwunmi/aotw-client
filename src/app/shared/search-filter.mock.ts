// Copyright 2022,
// Jurrit van der Ploeg

// models
import { Archive } from '../home/archive';
import { Region, RegionType } from '../regions-otw-client/region';

export const archivesStub: Archive[] = [
  {
    path: 'leagues',
    title: 'Leagues of the World'
  },
  {
    path: 'regions',
    title: 'Regions of the World'
  },
  {
    path: 'rituals',
    title: 'rituals'
  }
];

export const regionsStub: Region[] = [
  {
    code: 'NER',
    flag: true,
    id: 'uuid',
    name: 'Niger',
    parentNames: [{
      name: 'AF'
    }],
    regionType: RegionType.Country
  },
  {
    code: 'NGA',
    flag: true,
    id: 'uuid',
    name: 'Nigeria',
    parentNames: [{
      name: 'AF'
    }],
    regionType: RegionType.Country
  }
];