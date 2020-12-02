import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusDepoimentosComponent } from './meus-depoimentos.component';

describe('MeusDepoimentosComponent', () => {
  let component: MeusDepoimentosComponent;
  let fixture: ComponentFixture<MeusDepoimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusDepoimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
