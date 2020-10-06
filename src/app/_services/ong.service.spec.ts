import { TestBed } from '@angular/core/testing';

import { OngService } from './ong.service';

describe('OngService', () => {
  let service: OngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
