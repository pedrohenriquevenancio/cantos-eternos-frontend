import { TestBed } from '@angular/core/testing';

import { GenerosMusicaisAPIService } from './generos-musicais-api.service';

describe('GenerosMusicaisAPIService', () => {
  let service: GenerosMusicaisAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerosMusicaisAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
