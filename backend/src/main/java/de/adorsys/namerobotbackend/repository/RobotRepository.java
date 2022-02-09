package de.adorsys.namerobotbackend.repository;

import de.adorsys.namerobotbackend.domain.RobotElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RobotRepository extends JpaRepository<RobotElement, Long> {
    RobotElement findById(long id);
}
