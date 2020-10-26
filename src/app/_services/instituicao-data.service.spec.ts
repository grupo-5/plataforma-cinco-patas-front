import { TestBed } from '@angular/core/testing';

import { InstituicaoDataService } from './instituicao-data.service';

describe('InstituicaoDataService', () => {
  let service: InstituicaoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituicaoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
