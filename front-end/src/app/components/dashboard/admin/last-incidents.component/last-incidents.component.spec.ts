import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastIncidentsComponent } from './last-incidents.component';

describe('LastIncidentsComponent', () => {
  let component: LastIncidentsComponent;
  let fixture: ComponentFixture<LastIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastIncidentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
