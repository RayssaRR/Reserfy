package app_back_end.maintenance.entity;

import java.time.LocalDateTime;

import app_back_end.resource.entity.RecursoInterno;
import jakarta.persistence.*;

@Entity
@Table(name = "maintenances")
public class Maintenance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MaintenanceType type;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;

    private String justification;

    @ManyToOne
    @JoinColumn(name = "resource_id", nullable = false)
    private RecursoInterno resource;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MaintenanceStatus status;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public MaintenanceType getType() { return type; }
    public void setType(MaintenanceType type) { this.type = type; }

    public LocalDateTime getStartDate() { return startDate; }
    public void setStartDate(LocalDateTime startDate) { this.startDate = startDate; }

    public LocalDateTime getEndDate() { return endDate; }
    public void setEndDate(LocalDateTime endDate) { this.endDate = endDate; }

    public String getJustification() { return justification; }
    public void setJustification(String justification) { this.justification = justification; }

    public RecursoInterno getResource() { return resource; }
    public void setResource(RecursoInterno resource) { this.resource = resource; }

    public MaintenanceStatus getStatus() { return status; }
    public void setStatus(MaintenanceStatus status) { this.status = status; }
}