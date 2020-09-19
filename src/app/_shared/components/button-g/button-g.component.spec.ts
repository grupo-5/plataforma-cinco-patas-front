import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGComponent } from './button-g.component';

describe('ButtonGComponent', () => {
  let component: ButtonGComponent;
  let fixture: ComponentFixture<ButtonGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
