package app.back_end.request.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import app.back_end.request.entity.Request;
import app.back_end.request.entity.StatusRequest;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

    // Buscar por status (APROVADA, REJEITADA, PENDENTE)
    List<Request> findByStatus(StatusRequest status);

    // Buscar por nome do recurso
    List<Request> findByResourceNameContainingIgnoreCase(String nome);
}
