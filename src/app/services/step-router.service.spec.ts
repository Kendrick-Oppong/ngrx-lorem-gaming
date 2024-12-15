import { TestBed } from '@angular/core/testing';

import { StepRouterService } from './step-router.service';

describe('StepRouterService', () => {
  let service: StepRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
