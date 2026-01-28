import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooter } from './shared/components/app-footer/app-footer';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, AppFooter],
})
export class App {
  protected readonly title = signal('04-country-app');
}
