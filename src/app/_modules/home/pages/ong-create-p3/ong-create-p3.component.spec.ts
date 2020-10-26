import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngCreateP3Component } from './ong-create-p3.component';

describe('OngCreateP3Component', () => {
  let component: OngCreateP3Component;
  let fixture: ComponentFixture<OngCreateP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngCreateP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngCreateP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
