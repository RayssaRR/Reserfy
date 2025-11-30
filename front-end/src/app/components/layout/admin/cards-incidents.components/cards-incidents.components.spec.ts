import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIncidentComponent } from './cards-incidents.components';

describe('CardsIncidentsComponents', () => {
  let component: CardIncidentComponent;
  let fixture: ComponentFixture<CardIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIncidentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
