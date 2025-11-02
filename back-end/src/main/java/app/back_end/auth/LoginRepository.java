package app.back_end.auth;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
