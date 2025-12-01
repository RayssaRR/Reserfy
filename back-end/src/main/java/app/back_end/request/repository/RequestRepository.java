package app.back_end.request.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import app.back_end.request.entity.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

    List<Request> findByResourceId(Long resourceId);

    Optional<Request> findByIdAndResourceId(Long id, Long resourceId);

    boolean existsByIdAndResourceId(Long id, Long resourceId);
}
