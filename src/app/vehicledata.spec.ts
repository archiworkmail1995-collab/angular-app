import { TestBed } from '@angular/core/testing';

import { Vehicledata } from './vehicledata';

describe('Vehicledata', () => {
  let service: Vehicledata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vehicledata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
