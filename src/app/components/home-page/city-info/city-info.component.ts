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
  constructor(private route: ActivatedRoute, private cityService: CityService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    console.log("CITY INFO INIT");
    this.route.paramMap
      .subscribe(params => {
        this.city = this.cityService.getCities().find(city => {
          return city.name === params.get('city-name');
        });
        this.getTemperatureOnlyForCity(this.city.name);
      });
  }

  getTemperatureOnlyForCity(city: string): void{
    if (city.includes('-')) {
      city = city.replace('-', '+');
    }
    this.weatherService.getWeatherByCityName(city).subscribe(response => {
      this.weather =  response;
  });
  }

}
