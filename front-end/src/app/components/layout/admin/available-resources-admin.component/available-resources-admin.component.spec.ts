import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableResourcesAdminComponent } from './available-resources-admin.component';

describe('AvailableResourcesAdminComponent', () => {
  let component: AvailableResourcesAdminComponent;
  let fixture: ComponentFixture<AvailableResourcesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableResourcesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableResourcesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
