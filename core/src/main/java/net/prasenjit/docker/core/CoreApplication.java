package net.prasenjit.docker.core;

import net.prasenjit.docker.core.entity.Person;
import net.prasenjit.docker.core.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CoreApplication implements ApplicationRunner {

    @Autowired
    private PersonRepository personRepository;

    public static void main(String[] args) {
        SpringApplication.run(CoreApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {
        for (long i = 0; i < 10; i++) {
            personRepository.saveAndFlush(new Person(i, "Name " + i));
        }
    }
}
