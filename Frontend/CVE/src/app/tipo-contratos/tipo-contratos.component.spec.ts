import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContratosComponent } from './tipo-contratos.component';

describe('TipoContratosComponent', () => {
  let component: TipoContratosComponent;
  let fixture: ComponentFixture<TipoContratosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoContratosComponent]
    });
    fixture = TestBed.createComponent(TipoContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
