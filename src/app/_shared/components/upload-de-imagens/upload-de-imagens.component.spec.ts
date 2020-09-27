import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDeImagensComponent } from './upload-de-imagens.component';

describe('UploadDeImagensComponent', () => {
  let component: UploadDeImagensComponent;
  let fixture: ComponentFixture<UploadDeImagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDeImagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDeImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
