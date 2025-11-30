import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeResources } from './alternative-resources';

describe('AlternativeResources', () => {
  let component: AlternativeResources;
  let fixture: ComponentFixture<AlternativeResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternativeResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativeResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
