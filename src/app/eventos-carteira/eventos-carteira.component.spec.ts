import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCarteiraComponent } from './eventos-carteira.component';

describe('EventosCarteiraComponent', () => {
  let component: EventosCarteiraComponent;
  let fixture: ComponentFixture<EventosCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventosCarteiraComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
