import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdotanteDadosComponent } from './cadastro-adotante-dados.component';

describe('CadastroAdotanteDadosComponent', () => {
  let component: CadastroAdotanteDadosComponent;
  let fixture: ComponentFixture<CadastroAdotanteDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAdotanteDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAdotanteDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
