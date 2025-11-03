package app.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import app.back_end.entity.RecursoInterno;

public interface RecursoInternoRepository extends JpaRepository<RecursoInterno, Long> {
    Optional<RecursoInterno> findByNome(String nome);
}
