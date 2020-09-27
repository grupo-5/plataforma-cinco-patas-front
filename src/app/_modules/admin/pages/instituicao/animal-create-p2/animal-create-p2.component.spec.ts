import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCreateP2Component } from './animal-create-p2.component';

describe('AnimalCreateP2Component', () => {
  let component: AnimalCreateP2Component;
  let fixture: ComponentFixture<AnimalCreateP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCreateP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCreateP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
