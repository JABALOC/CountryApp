import { CountryService } from './../../services/country.service';
import { CountryList } from '../../../shared/components/country-list/country-list';
import { SearchInput } from './../../../shared/components/search-input/search-input';
import { Component, inject, resource, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { rxResource } from '@angular/core/rxjs-interop'
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { of } from 'rxjs';


@Component({
  selector: 'capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  query = signal('');

  // countryResource = rxResource<Country[], {query: string}>({
  //   request: () => ({ query: this.query() }),
  //   loader: ({ request }) => {
  //     if (!request.query) return of([]);
  //   return this.countryService.searchByCapital(request.query)
  //   }
  // });



  // query = signal('');

  // countryResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async (args: {request: {query: string } }) => {
  //     const request = args.request;
  //     if(!request.query) return[];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  // })


  isLoading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<Country[]>([])
  countriesReturn = signal<string[]>(['vacio'])
  isEmpty = signal(false);

  onSearch(query: string) {
    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
    .subscribe((countries) => {
      if(countries.length === 0) {
          this.isEmpty.set(true);
      }

        this.isLoading.set(false);
        this.countries.set(countries);
    })
    
    this.isEmpty.set(false);
  }
 }
