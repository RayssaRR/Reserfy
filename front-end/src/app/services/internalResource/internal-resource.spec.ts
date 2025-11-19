import { TestBed } from '@angular/core/testing';

import { InternalResourceService } from './internal-resource';

describe('InternalResource', () => {
  let service: InternalResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
