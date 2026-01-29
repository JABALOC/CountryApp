import { CountryList } from '../../../shared/components/country-list/country-list';
import { Country } from '../../interfaces/country.interface';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { CountryService } from '../../services/country.service';
import { SearchInput } from './../../../shared/components/search-input/search-input';
import { Component, inject, signal } from '@angular/core';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  input: string = '';
  countryService = inject(CountryService);

  isLoading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<Country[]>([])

  onSearch(query: string) {
    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
    .subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(true);
        this.countries.set([]);
        this.isError.set(err);
        console.log(err);
      }
    })
  }

  Search(value: string) {
    this.input = value;
  }

 }
