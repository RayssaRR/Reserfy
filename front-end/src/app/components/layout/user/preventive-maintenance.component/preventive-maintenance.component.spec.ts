import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveMaintenanceComponent } from './preventive-maintenance.component';

describe('PreventiveMaintenanceComponent', () => {
  let component: PreventiveMaintenanceComponent;
  let fixture: ComponentFixture<PreventiveMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreventiveMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
