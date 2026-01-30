import { Component, inject, input, output, signal } from '@angular/core';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { CountryList } from '../../../shared/components/country-list/country-list';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService = inject(CountryService)


  isLoading = signal(false);
  countries = signal<Country[]>([])
  notFound = signal<string|null>(null)

  onCountrySearch (query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.notFound.set(null);

    this.countryService.searchByCountry(query)
    .subscribe((resp) => {
        this.isLoading.set(false);
        this.countries.set(resp);
      if (this.countries().length === 0) {
        this.notFound.set('Country not found');

      }

    })

  }
 }
