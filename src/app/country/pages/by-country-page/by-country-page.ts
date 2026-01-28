import { Component, input, output } from '@angular/core';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { CountryList } from '../../../shared/components/country-list/country-list';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  input: string = '';

  onSearch (search: string) {
    this.input = search;
    console.log(this.input,'recibido');
  }
 }
