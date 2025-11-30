package app.back_end.incident.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.back_end.incident.entity.Incident;
import app.back_end.incident.entity.StatusIncident;
import app.back_end.incident.entity.SeverityEnum;
import app.back_end.incident.repository.IncidentRepository;
import app.back_end.resource.entity.RecursoInterno;
import app.back_end.resource.repository.RecursoInternoRepository;

@Service
public class IncidentService {

    @Autowired
    private IncidentRepository incidentRepository;

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;

    public Incident createIncident(Long recursoInternoId, Incident incident) {
        RecursoInterno recurso = recursoInternoRepository.findById(recursoInternoId)
                .orElseThrow(() -> new RuntimeException("Recurso interno não encontrado"));

        incident.setRecursoInterno(recurso);
        incident.setCreatedAt(LocalDateTime.now());

        return incidentRepository.save(incident);
    }

    public List<Incident> listAll() {
        return incidentRepository.findAll();
    }

    public Incident findById(Long id) {
        return incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incidente não encontrado"));
    }

    public List<Incident> listByRecursoInterno(Long recursoInternoId) {
        return incidentRepository.findByRecursoInternoId(recursoInternoId);
    }

    public List<Incident> listByStatus(StatusIncident status) {
        return incidentRepository.findByStatus(status);
    }

    public List<Incident> listBySeverity(SeverityEnum severity) {
        return incidentRepository.findBySeverity(severity);
    }

    public Incident updateIncident(Long id, Incident updatedIncident) {
        Incident incident = incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incidente não encontrado"));

        incident.setName(updatedIncident.getName());
        incident.setDescription(updatedIncident.getDescription());
        incident.setStatus(updatedIncident.getStatus());
        incident.setSeverity(updatedIncident.getSeverity());
        incident.setUpdatedAt(LocalDateTime.now());

        if (updatedIncident.getRecursoInterno() != null &&
            updatedIncident.getRecursoInterno().getId() != null) {

            RecursoInterno recurso = recursoInternoRepository.findById(
                        updatedIncident.getRecursoInterno().getId()
                    )
                    .orElseThrow(() -> new RuntimeException("Novo recurso não encontrado"));

            incident.setRecursoInterno(recurso);
        }

        return incidentRepository.save(incident);
    }

    public void deleteIncident(Long id) {
        Incident incident = incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incidente não encontrado"));

        incidentRepository.delete(incident);
    }
}
