import { CountryMapper } from './../mappers/country.mappers';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital( query: string ): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      delay(3000),
      tap((resp) => console.log(resp)),
      catchError(err => {
        console.log('Error fetching', err)
      //   return throwError(
      //     () => new Error(`No se puede obtener país con el query ${query}`));
      // })
        return of([]);
      })
    )
  }

  searchByCountry( query: string) {
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      catchError(err => {
        console.log(err)
        return of([]);
      })
    )
  }
}
