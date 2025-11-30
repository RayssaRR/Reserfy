package app.back_end.incident.entity;

import java.time.LocalDateTime;

import app.back_end.resource.entity.RecursoInterno;
import jakarta.persistence.*;

@Entity
@Table(name = "incidents")
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusIncident status;

	@Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SeverityEnum severity;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(optional = false)
    @JoinColumn(name = "recurso_interno_id", nullable = false)
    private RecursoInterno recursoInterno;

    public Incident() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public StatusIncident getStatus() {
        return status;
    }

    public void setStatus(StatusIncident status) {
        this.status = status;
    }

	public SeverityEnum getSeverity() {
        return severity;
    }

    public void setSeverity(SeverityEnum severity) {
        this.severity = severity;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


    public RecursoInterno getRecursoInterno() {
        return recursoInterno;
    }

    public void setRecursoInterno(RecursoInterno recursoInterno) {
        this.recursoInterno = recursoInterno;
    }
}
