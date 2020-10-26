import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSolicitacoesComponent } from './listagem-solicitacoes.component';

describe('ListagemSolicitacoesComponent', () => {
  let component: ListagemSolicitacoesComponent;
  let fixture: ComponentFixture<ListagemSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
