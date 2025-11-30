import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIncidentComponent } from './report-incident.component';

describe('ReportIncidentComponent', () => {
  let component: ReportIncidentComponent;
  let fixture: ComponentFixture<ReportIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportIncidentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
