import { TestBed, inject } from '@angular/core/testing';

import { AccServiceService } from './acc-service.service';

describe('AccServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccServiceService]
    });
  });

  it('should be created', inject([AccServiceService], (service: AccServiceService) => {
    expect(service).toBeTruthy();
  }));
});
