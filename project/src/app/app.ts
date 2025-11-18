import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { One } from './components/one/one';
import { Two } from './components/two/two';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, One, Two],
  template: `
    <app-header />
      <app-component-one />
      <app-component-two />
  `,
  
})
export class App {
  title = 'first-app';
}