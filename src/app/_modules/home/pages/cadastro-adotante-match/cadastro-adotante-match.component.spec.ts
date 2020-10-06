import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdotanteMatchComponent } from './cadastro-adotante-match.component';

describe('CadastroAdotanteMatchComponent', () => {
  let component: CadastroAdotanteMatchComponent;
  let fixture: ComponentFixture<CadastroAdotanteMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAdotanteMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAdotanteMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
