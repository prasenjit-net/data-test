package net.prasenjit.docker.core.repository;

import net.prasenjit.docker.core.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by PRASEN on 1/4/2017.
 */
public interface PersonRepository extends JpaRepository<Person, Long> {
}
