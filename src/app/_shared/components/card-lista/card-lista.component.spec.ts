import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaComponent } from './card-lista.component';

describe('CardListaComponent', () => {
  let component: CardListaComponent;
  let fixture: ComponentFixture<CardListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
