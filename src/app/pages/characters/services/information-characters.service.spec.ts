import { TestBed } from '@angular/core/testing';

import { InformationCharactersService } from './information-characters.service';

describe('InformationCharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationCharactersService = TestBed.get(InformationCharactersService);
    expect(service).toBeTruthy();
  });
});
