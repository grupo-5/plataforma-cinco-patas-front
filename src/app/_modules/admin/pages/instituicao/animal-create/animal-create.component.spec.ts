import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCreateComponent } from './animal-create.component';

describe('AnimalCreateComponent', () => {
  let component: AnimalCreateComponent;
  let fixture: ComponentFixture<AnimalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
