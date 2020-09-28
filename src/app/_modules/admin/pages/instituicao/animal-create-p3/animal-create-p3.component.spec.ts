import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCreateP3Component } from './animal-create-p3.component';

describe('AnimalCreateP3Component', () => {
  let component: AnimalCreateP3Component;
  let fixture: ComponentFixture<AnimalCreateP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCreateP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCreateP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
