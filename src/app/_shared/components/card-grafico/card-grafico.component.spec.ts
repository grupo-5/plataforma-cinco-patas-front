import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficoComponent } from './card-grafico.component';

describe('CardGraficoComponent', () => {
  let component: CardGraficoComponent;
  let fixture: ComponentFixture<CardGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
