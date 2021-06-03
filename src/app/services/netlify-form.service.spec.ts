import { TestBed } from '@angular/core/testing';

import { NetlifyFormService } from './netlify-form.service';

describe('NetlifyFormService', () => {
  let service: NetlifyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetlifyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
