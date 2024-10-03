import { TestBed } from '@angular/core/testing';

import { ToggleHiddenService } from './toggle-hidden.service';

describe('ToggleHiddenService', () => {
  let service: ToggleHiddenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleHiddenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
