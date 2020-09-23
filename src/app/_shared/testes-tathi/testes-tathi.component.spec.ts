import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesTathiComponent } from './testes-tathi.component';

describe('TestesTathiComponent', () => {
  let component: TestesTathiComponent;
  let fixture: ComponentFixture<TestesTathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestesTathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesTathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
