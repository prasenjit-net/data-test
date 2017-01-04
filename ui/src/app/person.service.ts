import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Person} from "./person";

@Injectable()
export class PersonService {
  private personsUrl = 'api/person';

  constructor(private http:Http) {
  }

  getAllPersons():Observable<Person[]> {
    return this.http.get(this.personsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addPerson(name:String) {
    return this.http.post(this.personsUrl, {name:name})
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res:Response) {
    return res.json();
  }

  private handleError(error:Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg:string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
