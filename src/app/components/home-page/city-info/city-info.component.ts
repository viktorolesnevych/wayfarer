import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../../models/City';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../../../services/city.service';
import {WeatherService} from '../../../services/weather.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {

  // input can be used to grab city from home-page (1st approach)
  @Input() city: City;
  weather: any;
  weatherInfoDetails = [false, 'Click for more'];

  constructor(private route: ActivatedRoute, private cityService: CityService, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = this.cityService.getCities().find(city => {
          return city.name === params.get('city-name');
        });
        this.getWeatherForCity(this.city.name);
      });
  }

  getWeatherForCity(city: string): void {
    if (city.includes('-')) {
      city = city.replace('-', '+');
    }
    this.weatherService.getWeatherByCityName(city).subscribe(response => {
      this.weather = response;
    });
  }
  // Will change button captions and show/hide paragraph about weather detailed
  weatherDetails(): void{
    this.weatherInfoDetails = this.weatherInfoDetails[0] === true ?
      [false, 'Click for more'] : [true, 'Hide'];
  }

}
