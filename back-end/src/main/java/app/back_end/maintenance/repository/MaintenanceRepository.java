package app_back_end.maintenance.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app_back_end.maintenance.entity.Maintenance;
import app_back_end.resource.entity.RecursoInterno;

public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {

    List<Maintenance> findByResource(RecursoInterno resource);

    List<Maintenance> findByResourceAndEndDateAfterAndStartDateBefore(
            RecursoInterno resource,
            LocalDateTime start,
            LocalDateTime end
    );