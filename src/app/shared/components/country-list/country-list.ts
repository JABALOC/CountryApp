import { Component, input, output } from '@angular/core';
import { RESTCountry } from '../../../country/interfaces/rest-countries.interface';
import { Country } from '../../../country/interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
})
export class CountryList {

  list = output()
  countries = input<Country[]>()



}
