import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
   constructor(private http: HttpClient) {}

  fetchCountries(limit: number): Observable<Country[]> {
    const query = {
      query: `
        query {
          countries(limit: ${limit}) {
            name
            population
            area
            density
          }
        }
      `
    };

    return this.http.post<Country[]>('/graphql', query);
  }

}
