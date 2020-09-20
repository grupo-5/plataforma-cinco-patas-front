import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoRosquinhaComponent } from './grafico-rosquinha.component';

describe('GraficoRosquinhaComponent', () => {
  let component: GraficoRosquinhaComponent;
  let fixture: ComponentFixture<GraficoRosquinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoRosquinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoRosquinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
