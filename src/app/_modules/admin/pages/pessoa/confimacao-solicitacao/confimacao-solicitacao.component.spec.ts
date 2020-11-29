import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimacaoSolicitacaoComponent } from './confimacao-solicitacao.component';

describe('ConfimacaoSolicitacaoComponent', () => {
  let component: ConfimacaoSolicitacaoComponent;
  let fixture: ComponentFixture<ConfimacaoSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimacaoSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimacaoSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
