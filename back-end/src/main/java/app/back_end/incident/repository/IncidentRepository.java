package app.back_end.incident.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.back_end.incident.entity.Incident;
import app.back_end.incident.entity.StatusIncident;
import app.back_end.incident.entity.SeverityEnum;

@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {

    Optional<Incident> findByName(String title);

    List<Incident> findByStatus(StatusIncident status);

    List<Incident> findBySeverity(SeverityEnum severity);

    List<Incident> findByRecursoInternoId(Long recursoInternoId);
}
