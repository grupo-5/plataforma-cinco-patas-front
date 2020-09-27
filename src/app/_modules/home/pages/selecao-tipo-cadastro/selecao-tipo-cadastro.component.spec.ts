import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoTipoCadastroComponent } from './selecao-tipo-cadastro.component';

describe('SelecaoTipoCadastroComponent', () => {
  let component: SelecaoTipoCadastroComponent;
  let fixture: ComponentFixture<SelecaoTipoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoTipoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoTipoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
