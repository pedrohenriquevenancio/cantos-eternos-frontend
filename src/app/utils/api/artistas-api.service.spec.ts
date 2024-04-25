import { TestBed } from '@angular/core/testing';

import { ArtistasAPIService } from './artistas-api.service';

describe('ArtistasAPIService', () => {
  let service: ArtistasAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistasAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
