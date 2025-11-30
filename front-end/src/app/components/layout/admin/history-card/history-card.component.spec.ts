import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCard } from './history-card.component';

describe('HistoryCard', () => {
  let component: HistoryCard;
  let fixture: ComponentFixture<HistoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
