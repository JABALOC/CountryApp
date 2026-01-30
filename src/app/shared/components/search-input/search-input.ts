import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',

})
export class SearchInput {

  query = output<string>()
  placeholder = input('search')

changeSearch(query: string) {
  this.query.emit(query)
  console.log(query, 'enviado')
}
}
