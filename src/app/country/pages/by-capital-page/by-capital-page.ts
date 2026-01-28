import { CountryList } from '../../../shared/components/country-list/country-list';
import { SearchInput } from './../../../shared/components/search-input/search-input';
import { Component } from '@angular/core';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  input: string = '';

  onSearch(value: string) {
    this.input = value;
    console.log(this.input, 'recibido')
  }

 }
