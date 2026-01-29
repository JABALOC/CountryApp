import { Translation } from './../interfaces/rest-countries.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from './../interfaces/country.interface';


export class CountryMapper {

  // static RestCountry => Country

  static mapRestCountryToCountry(country: RESTCountry): Country {
    console.log(country);
    return {
      cca2: country.cca2,
      cioc: country.cioc,
      svgFlag: country.flags.svg,
      svgFlagAlt: country.flags.alt,
      country: country.name.common,
      capital: country.capital.join(','),
      population: country.population,

    }
  }


  // static RestCountry[] => Country[]

  static mapRestCountryArrayToCountryArray(countries: RESTCountry[]): Country[] {
    return countries.map(this.mapRestCountryToCountry)
  }


  // Usamos el operador map en service
}
