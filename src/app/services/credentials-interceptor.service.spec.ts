import { TestBed } from '@angular/core/testing';

import { CredentialsInterceptorService } from './credentials-interceptor.service';

describe('CredentialsInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredentialsInterceptorService = TestBed.get(CredentialsInterceptorService);
    expect(service).toBeTruthy();
  });
});
