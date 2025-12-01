import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentsDetailsComponent } from './incidents-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IncidentsService } from '../../../../services/incident/incidents-service'; 

describe('IncidentDetailsComponent', () => {
  let component: IncidentsDetailsComponent;
  let fixture: ComponentFixture<IncidentsDetailsComponent>;
  let mockIncidentService: jasmine.SpyObj<IncidentsService>;

  beforeEach(async () => {
    mockIncidentService = jasmine.createSpyObj('IncidentService', ['getIncident', 'updateIncident', 'deleteIncident']);
    
    await TestBed.configureTestingModule({
      imports: [IncidentsDetailsComponent, HttpClientTestingModule],
      providers: [
        { provide: IncidentsService, useValue: mockIncidentService },
        { 
            provide: ActivatedRoute, 
            useValue: { 
                paramMap: of({ get: (key: string) => (key === 'id' ? '123' : null) }) 
            } 
        }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(IncidentsDetailsComponent);
    component = fixture.componentInstance;
    
    mockIncidentService.getIncident.and.returnValue(of(undefined));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar loadIncident no ngOnInit com o ID da rota', () => {
    const loadIncidentSpy = spyOn(component, 'loadIncident');
    component.ngOnInit();
    expect(loadIncidentSpy).toHaveBeenCalledWith(123);
  });
});