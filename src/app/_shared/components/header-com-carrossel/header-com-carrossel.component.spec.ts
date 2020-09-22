import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComCarrosselComponent } from './header-com-carrossel.component';

describe('HeaderComCarrosselComponent', () => {
  let component: HeaderComCarrosselComponent;
  let fixture: ComponentFixture<HeaderComCarrosselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComCarrosselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
