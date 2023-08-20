import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('assets/data/people.json');
  }

  search(query: string): Observable<Person[]> {
    if (!query || query === '*') {
      query = '';
    } else {
      query = query.toLowerCase();
    }
    return this.getAll().pipe(
      map((data: Person[]) =>
        data
          .map((person: Person) =>
            !!localStorage['person' + person.id]
              ? JSON.parse(localStorage['person' + person.id])
              : person
          )
          .filter((person: Person) =>
            JSON.stringify(person).toLowerCase().includes(query)
          )
      )
    );
  }

  getById(id: number): Observable<Person> {
    return this.getAll().pipe(
      map((allPersons: Person[]) => {
        if (localStorage['person' + id]) {
          return JSON.parse(localStorage['person' + id]);
        }
        return allPersons.find((person: Person) => person.id == id);
      })
    );
  }

  save = (person: Person) => {
    localStorage['person' + person.id] = JSON.stringify(person);
  };
}
