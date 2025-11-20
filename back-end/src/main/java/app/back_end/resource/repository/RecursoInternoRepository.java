package app.back_end.resource.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.back_end.resource.entity.RecursoInterno;
import app.back_end.resource.entity.StatusEnum;

import java.util.List;
import java.util.Optional;

public interface RecursoInternoRepository extends JpaRepository<RecursoInterno, Long> {
    Optional<RecursoInterno> findByName(String name);
            
    List<RecursoInterno> findAll();
    
    RecursoInterno findByStatus(StatusEnum status);
}
