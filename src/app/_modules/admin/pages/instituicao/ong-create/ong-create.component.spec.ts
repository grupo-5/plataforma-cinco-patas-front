import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngCreateComponent } from './ong-create.component';

describe('OngCreateComponent', () => {
  let component: OngCreateComponent;
  let fixture: ComponentFixture<OngCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
