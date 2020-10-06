import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngCreateP2Component } from './ong-create-p2.component';

describe('OngCreateP2Component', () => {
  let component: OngCreateP2Component;
  let fixture: ComponentFixture<OngCreateP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngCreateP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngCreateP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
