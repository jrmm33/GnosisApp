import { TestBed } from '@angular/core/testing';

import { SunriseSunsetService } from './sunrise-sunset.service';

describe('SunriseSunsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunriseSunsetService = TestBed.get(SunriseSunsetService);
    expect(service).toBeTruthy();
  });
});
