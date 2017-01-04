package net.prasenjit.docker.core.controller;

import net.prasenjit.docker.core.entity.Person;
import net.prasenjit.docker.core.repository.PersonRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by PRASEN on 1/4/2017.
 */
@RestController
@RequestMapping("/api/person")
public class PersonController {

    private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping
    public List<Person> list() {
        return personRepository.findAll();
    }

    @PostMapping
    public Person create(@RequestBody Person person) {
        person.setId(null);
        return personRepository.save(person);
    }

    @GetMapping("{id}")
    public Person detail(@PathVariable(name = "id") Long id) {
        return personRepository.findOne(id);
    }

    @PutMapping("{id}")
    public Person detail(@PathVariable(name = "id") Long id, @RequestBody Person person) {
        person.setId(id);
        return personRepository.saveAndFlush(person);
    }
}
