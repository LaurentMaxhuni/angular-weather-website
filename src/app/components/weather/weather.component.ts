import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { NgIf, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-weather',
  imports: [NgIf, TitleCasePipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  date = signal(this.convertDateToWords());
  weatherService = inject(WeatherService);
  private apiKey = import.meta.env['NG_APP_API_KEY'];
  private apiUrl = import.meta.env['NG_APP_API_URL'];
  city = signal('');
  temp = signal('');
  icon = signal('');
  description = signal('');
  humidity = signal('');
  uvIndex = signal('');
  feelsLike = signal('');
  windSpeed = signal('');
  windDirection = signal('');

  searchCity(input: HTMLInputElement) {
    const query = input.value.trim();
    this.city.set(query);
    if (!query) {
      input.focus();
      return;
    }
    this.weatherService
      .getWeather(`${this.apiUrl}?key=${this.apiKey}&q=${query}`)
      .subscribe((data: any) => {
        console.log(data);
        this.icon.set(data['current']['condition']['icon']);
        this.temp.set(data['current']['temp_c']);
        this.description.set(data['current']['condition']['text']);
        this.humidity.set(data['current']['humidity']);
        this.uvIndex.set(data['current']['uv']);
        this.feelsLike.set(data['current']['feelslike_c']);
        this.windSpeed.set(data['current']['wind_kph']);
        switch (data['current']['wind_dir']) {
          case 'N':
            this.windDirection.set('North');
            break;
          case 'S':
            this.windDirection.set('South');
            break;
          case 'E':
            this.windDirection.set('East');
            break;
          case 'W':
            this.windDirection.set('West');
            break;
          case 'NW':
            this.windDirection.set('North-West');
            break;
          case 'NE':
            this.windDirection.set('North-East');
            break;
          case 'SW':
            this.windDirection.set('South-West');
            break;
          case 'SE':
            this.windDirection.set('South-East');
            break;
          case 'NNE':
            this.windDirection.set('North-North-East');
            break;
          case 'NNW':
            this.windDirection.set('North-North-West');
            break;
          case 'SSE':
            this.windDirection.set('South-South-East');
            break;
          case 'SSW':
            this.windDirection.set('South-South-West');
            break;
          case 'ENE':
            this.windDirection.set('East-North-East');
            break;
          case 'ESE':
            this.windDirection.set('East-South-East');
            break;
          case 'WNW':
            this.windDirection.set('West-North-West');
            break;
          case 'WSW':
            this.windDirection.set('West-South-West');
            break;
          default:
            this.windDirection.set('Unknown');
        }
      });
  }

  setCity(event: Event) {
    const input = event.target as HTMLInputElement;
    this.city.set(input.value);
  }

  convertDateToWords() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return `${days[new Date().getDay()]}, ${
      months[new Date().getMonth()]
    } ${new Date().getDate()}, ${new Date().getFullYear()}`;
  }
}
