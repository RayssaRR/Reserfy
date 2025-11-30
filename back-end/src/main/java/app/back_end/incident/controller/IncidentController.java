package app.back_end.incident.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import app.back_end.incident.entity.Incident;
import app.back_end.incident.entity.SeverityEnum;
import app.back_end.incident.entity.StatusIncident;
import app.back_end.incident.service.IncidentService;

@RestController
@RequestMapping("/{roleFlag}/principal/internal-resources/{idResource}/incidents")
public class IncidentController {

    @Autowired
    private IncidentService incidentService;

    @PostMapping("/save")
    public ResponseEntity<?> saveIncident(
            @PathVariable Long idResource,
            @RequestBody Incident incident) {

        try {
            Incident created = incidentService.createIncident(idResource, incident);
            return new ResponseEntity<>(created, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao cadastrar incidente: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/list")
    public ResponseEntity<?> listAll() {
        try {
            List<Incident> incidents = incidentService.listAll();
            return new ResponseEntity<>(incidents, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao listar incidentes: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{idIncident}")
    public ResponseEntity<?> getIncident(@PathVariable Long idIncident) {
        try {
            Incident incident = incidentService.findById(idIncident);
            return new ResponseEntity<>(incident, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao buscar incidente: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/status/{status}")
    public ResponseEntity<?> listByStatus(@PathVariable StatusIncident status) {
        try {
            List<Incident> incidents = incidentService.listByStatus(status);
            return new ResponseEntity<>(incidents, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao listar incidentes por status: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/severity/{severity}")
    public ResponseEntity<?> listBySeverity(@PathVariable SeverityEnum severity) {
        try {
            List<Incident> incidents = incidentService.listBySeverity(severity);
            return new ResponseEntity<>(incidents, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao listar incidentes por severidade: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{idIncident}")
    public ResponseEntity<?> updateIncident(
            @PathVariable Long idIncident,
            @RequestBody Incident updatedIncident) {

        try {
            Incident incident = incidentService.updateIncident(idIncident, updatedIncident);
            return new ResponseEntity<>(incident, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao atualizar incidente: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{idIncident}")
    public ResponseEntity<?> deleteIncident(@PathVariable Long idIncident) {
        try {
            incidentService.deleteIncident(idIncident);
            return new ResponseEntity<>("Incidente deletado com sucesso!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao deletar incidente: " + e.getMessage(),
                    HttpStatus.BAD_REQUEST);
        }
    }
}
