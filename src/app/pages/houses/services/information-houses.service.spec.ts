import { TestBed } from '@angular/core/testing';

import { InformationHousesService } from './information-houses.service';

describe('InformationHousesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationHousesService = TestBed.get(InformationHousesService);
    expect(service).toBeTruthy();
  });
});
