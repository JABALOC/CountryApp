import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',

})
export class SearchInput {

  search = output<string>()
  placeholder = input('search')

changeSearch(search: string) {
  this.search.emit(search)
  console.log(search, 'enviado')
}
}
