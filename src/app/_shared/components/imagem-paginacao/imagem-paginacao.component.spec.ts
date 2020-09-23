import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemPaginacaoComponent } from './imagem-paginacao.component';

describe('ImagemPaginacaoComponent', () => {
  let component: ImagemPaginacaoComponent;
  let fixture: ComponentFixture<ImagemPaginacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemPaginacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemPaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
