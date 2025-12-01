import { TestBed } from '@angular/core/testing';
import { MaintenanceDetailsService } from '../../services/maintenance-details/maintenanceDetails';

describe('MaintenanceDetailsService', () => {
  let service: MaintenanceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
