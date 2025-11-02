package app.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import app.back_end.entity.RecursoInterno;
import java.util.Optional;

public interface RecursoInternoRepository extends JpaRepository<RecursoInterno, Long> {

    Optional<RecursoInterno> findByCodigo(String codigo);
}