import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIncentivoComponent } from './card-incentivo.component';

describe('CardIncentivoComponent', () => {
  let component: CardIncentivoComponent;
  let fixture: ComponentFixture<CardIncentivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIncentivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIncentivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
