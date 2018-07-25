import { TestBed, inject } from '@angular/core/testing';

import { HeroListApiFetcherService } from './hero-list-api-fetcher.service';

describe('HeroListApiFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroListApiFetcherService]
    });
  });

  it('should be created', inject([HeroListApiFetcherService], (service: HeroListApiFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
