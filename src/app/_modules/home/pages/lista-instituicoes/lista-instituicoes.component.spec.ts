import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstituicoesComponent } from './lista-instituicoes.component';

describe('ListaInstituicoesComponent', () => {
  let component: ListaInstituicoesComponent;
  let fixture: ComponentFixture<ListaInstituicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInstituicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInstituicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
