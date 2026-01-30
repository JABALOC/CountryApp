import { Component, input, output, signal } from '@angular/core';
import { RESTCountry } from '../../../country/interfaces/rest-countries.interface';
import { Country } from '../../../country/interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
})
export class CountryList {

  list = output()
  countries = input<Country[]>()
  isLoading = input<boolean>();
  isError = input<string|null|undefined>()
  isEmpty = input<boolean>();

}
