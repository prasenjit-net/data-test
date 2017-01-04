import {Component, OnInit} from "@angular/core";
import {PersonService} from "../person.service";
import {Person} from "../person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons:Person[];
  errorMessage:String;

  constructor(private personService:PersonService) {
  }

  ngOnInit() {
    this.personService.getAllPersons()
      .subscribe(
        persons => this.persons = persons,
        error => this.errorMessage = <any>error);
  }

  addPerson(name:String) {
    this.personService.addPerson(name)
      .subscribe(
        person => this.ngOnInit(),
        error => this.errorMessage = <any>error);
  }
}
