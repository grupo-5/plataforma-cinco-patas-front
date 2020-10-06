import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPessoaComponent } from './dashboard-pessoa.component';

describe('DashboardPessoaComponent', () => {
  let component: DashboardPessoaComponent;
  let fixture: ComponentFixture<DashboardPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
