import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSerieHistoricaComponent } from './titulo-serie-historica.component';

describe('TituloSerieHistoricaComponent', () => {
  let component: TituloSerieHistoricaComponent;
  let fixture: ComponentFixture<TituloSerieHistoricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TituloSerieHistoricaComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloSerieHistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
