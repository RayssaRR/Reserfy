package app.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import app.back_end.entity.Administrador;

public interface AdministradorRepository extends JpaRepository<Administrador, Long>{

}
