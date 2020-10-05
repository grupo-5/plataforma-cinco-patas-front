import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdotanteEnderecoComponent } from './cadastro-adotante-endereco.component';

describe('CadastroAdotanteEnderecoComponent', () => {
  let component: CadastroAdotanteEnderecoComponent;
  let fixture: ComponentFixture<CadastroAdotanteEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAdotanteEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAdotanteEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
