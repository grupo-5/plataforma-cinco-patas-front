import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstituicaoComponent } from './card-instituicao.component';

describe('CardInstituicaoComponent', () => {
  let component: CardInstituicaoComponent;
  let fixture: ComponentFixture<CardInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
