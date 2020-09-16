import { TestBed } from '@angular/core/testing';

import { ValidarInputsService } from './validar-inputs.service';

describe('ValidarInputsService', () => {
  let service: ValidarInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
