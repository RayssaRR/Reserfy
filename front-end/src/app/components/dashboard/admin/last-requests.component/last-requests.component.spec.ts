import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRequestsComponent } from './last-requests.component';

describe('LastRequestsComponent', () => {
  let component: LastRequestsComponent;
  let fixture: ComponentFixture<LastRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
