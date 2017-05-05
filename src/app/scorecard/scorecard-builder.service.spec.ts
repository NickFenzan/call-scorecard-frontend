import { TestBed, inject } from '@angular/core/testing';

import { ScorecardBuilderService } from './scorecard-builder.service';

describe('ScorecardBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScorecardBuilderService]
    });
  });

  it('should ...', inject([ScorecardBuilderService], (service: ScorecardBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
