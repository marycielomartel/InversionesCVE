import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEstadoComponent } from './tipo-estado.component';

describe('TipoEstadoComponent', () => {
  let component: TipoEstadoComponent;
  let fixture: ComponentFixture<TipoEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoEstadoComponent]
    });
    fixture = TestBed.createComponent(TipoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
