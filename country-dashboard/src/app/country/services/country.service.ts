import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Country } from '../../models/country.model';
//import { errorContext } from 'rxjs/internal/util/errorContext';


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

    const request = fetch('https://countrybackend-9edy.onrender.com/graphql', {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json'
              },
        body: JSON.stringify(query)
      })
      .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
      })
      .then(data => data.data.countries);

      return from(request);


  }

}
