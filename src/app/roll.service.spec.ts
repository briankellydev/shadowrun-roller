/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RollService } from './roll.service';

describe('RollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollService]
    });
  });

  it('should return proper number of hits', inject([RollService], (service: RollService) => {
    let roll = [5, 6, 1, 2, 3, 4];
    let result = {
      numberOfHits: 2,
      glitch: false,
      criticalGlitch: false
    }
    expect(service.determineNumberOfHits(roll)).toEqual(result);
  }));

  it('should glitch if more than half are 1s', inject([RollService], (service: RollService) => {
    let roll = [1, 1, 1, 1, 5, 3];
    let result = {
      numberOfHits: 1,
      glitch: true,
      criticalGlitch: false
    }
    expect(service.determineNumberOfHits(roll)).toEqual(result);
  }));

  it('should critical glitch if more than half are 1s and no hits', inject([RollService], (service: RollService) => {
    let roll = [1, 1, 1, 1, 4, 3];
    let result = {
      numberOfHits: 0,
      glitch: true,
      criticalGlitch: true
    }
    expect(service.determineNumberOfHits(roll)).toEqual(result);
  }));
});
