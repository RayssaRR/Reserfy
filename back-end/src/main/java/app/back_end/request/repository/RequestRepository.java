package app.back_end.request.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import app.back_end.request.entity.Request;
import app.back_end.request.entity.StatusRequest;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

    List<Request> findByStatus(StatusRequest status);

    List<Request> findByResource_Id(Long resourceId);
}
