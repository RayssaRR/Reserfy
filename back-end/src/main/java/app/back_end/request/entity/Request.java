package app.back_end.request.entity;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import app.back_end.auth.entity.User;
import app.back_end.resource.entity.RecursoInterno;

@Entity
@Table(name = "requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING) 
    @Column(nullable = false)
    private StatusRequest status;

    @Column(nullable = false)
    private String startDate;

    @Column(nullable = false)
    private String endDate;

    @Column(nullable = false)
    private String startTime;

    @Column(nullable = false)
    private String endTime;

    private String justification;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JsonBackReference 
    @JoinColumn(name = "resource_id", nullable = false)
    private RecursoInterno resource;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public StatusRequest getStatus() { return status; }
    public void setStatus(StatusRequest status) { this.status = status; }

    public String getStartDate() { return startDate; }
    public void setStartDate(String startDate) { this.startDate = startDate; }

    public String getEndDate() { return endDate; }
    public void setEndDate(String endDate) { this.endDate = endDate; }

    public String getStartTime() { return startTime; }
    public void setStartTime(String startTime) { this.startTime = startTime; }

    public String getEndTime() { return endTime; }
    public void setEndTime(String endTime) { this.endTime = endTime; }

    public String getJustification() { return justification; }
    public void setJustification(String justification) { this.justification = justification; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public RecursoInterno getResource() { return resource; }
    public void setResource(RecursoInterno resource) { this.resource = resource; }
}
