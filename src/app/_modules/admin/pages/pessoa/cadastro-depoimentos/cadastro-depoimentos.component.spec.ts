import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDepoimentosComponent } from './cadastro-depoimentos.component';

describe('CadastroDepoimentosComponent', () => {
  let component: CadastroDepoimentosComponent;
  let fixture: ComponentFixture<CadastroDepoimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDepoimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
