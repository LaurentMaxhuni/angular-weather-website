import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherComponent } from './components/weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-weather-website';
}
