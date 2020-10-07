import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdotanteComponent } from './card-adotante.component';

describe('CardAdotanteComponent', () => {
  let component: CardAdotanteComponent;
  let fixture: ComponentFixture<CardAdotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
