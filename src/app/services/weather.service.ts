import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_KEY = '2b7a0f94ae76ae0f2eed4ae736590a79';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient){ }

  getWeatherByCityName(city: string): Observable<any>{
    // units=imperial for Fahrenheit
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
  }
}
