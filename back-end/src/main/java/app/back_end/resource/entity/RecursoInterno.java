package app.back_end.resource.entity;


import java.util.ArrayList;
import java.util.List;

import app.back_end.request.entity.Request;
import jakarta.persistence.*;

@Entity
@Table(name = "internal_resource")
public class RecursoInterno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String category; 
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusEnum status;

    private String location;
    
    private String description;
    
    @OneToMany(mappedBy = "resource")
    private List<Request> requests = new ArrayList<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public StatusEnum getStatus() { return status; }
    public void setStatus(StatusEnum status) { this.status = status; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    
}
