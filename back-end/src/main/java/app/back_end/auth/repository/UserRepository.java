package app.back_end.auth.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import app.back_end.auth.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
