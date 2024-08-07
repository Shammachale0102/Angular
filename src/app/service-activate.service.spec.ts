import { TestBed } from '@angular/core/testing';

import { ServiceActivateService } from './service-activate.service';

describe('ServiceActivateService', () => {
  let service: ServiceActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
