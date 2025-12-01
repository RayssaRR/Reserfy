import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDetailsComponent } from './maintenance-details.component';

describe('MaintenanceDetailsComponent', () => {
  let component: MaintenanceDetailsComponent;
  let fixture: ComponentFixture<MaintenanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
