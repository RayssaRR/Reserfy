package app.back_end.request.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import app.back_end.auth.entity.User;
import app.back_end.resource.entity.RecursoInterno;

@Entity
@Table(name = "requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String status;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private String justification;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "internal_resource_id")
    private RecursoInterno resource;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getStartDate() { return startDate; }
    public void setStartDate(LocalDateTime startDate) { this.startDate = startDate; }

    public LocalDateTime getEndDate() { return endDate; }
    public void setEndDate(LocalDateTime endDate) { this.endDate = endDate; }

    public String getJustification() { return justification; }
    public void setJustification(String justification) { this.justification = justification; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public RecursoInterno getResource() { return resource; }
    public void setResource(RecursoInterno resource) { this.resource = resource; }
}
