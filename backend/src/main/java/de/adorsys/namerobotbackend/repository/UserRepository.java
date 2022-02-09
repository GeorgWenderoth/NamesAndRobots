package de.adorsys.namerobotbackend.repository;

import de.adorsys.namerobotbackend.domain.UserElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserElement, Long> {
    Optional<UserElement> findByEmail(String email);
    Optional<UserElement> findByUsername(String username);

    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}