package app.back_end.resource.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import app.back_end.resource.entity.RecursoInterno;

import java.util.Optional;

public interface RecursoInternoRepository extends JpaRepository<RecursoInterno, Long> {
    Optional<RecursoInterno> findByNome(String nome);
    
    Page<RecursoInterno> findByStatus(String status, Pageable pageable);
}
