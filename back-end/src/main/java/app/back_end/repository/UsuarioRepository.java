package app.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import app.back_end.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
