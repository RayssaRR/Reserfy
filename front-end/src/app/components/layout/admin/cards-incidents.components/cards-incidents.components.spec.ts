import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsIncidentsComponents } from './cards-incidents.components';

describe('CardsIncidentsComponents', () => {
  let component: CardsIncidentsComponents;
  let fixture: ComponentFixture<CardsIncidentsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsIncidentsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsIncidentsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
