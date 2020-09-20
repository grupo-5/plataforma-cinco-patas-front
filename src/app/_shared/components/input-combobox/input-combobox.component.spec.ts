import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComboboxComponent } from './input-combobox.component';

describe('InputComboboxComponent', () => {
  let component: InputComboboxComponent;
  let fixture: ComponentFixture<InputComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
