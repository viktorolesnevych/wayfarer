import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CityService} from '../../../services/city.service';
import {City} from '../../../models/City';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[];
  isCityChosen = false;
  @Output() newCityEvent = new EventEmitter<City>();
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }
  addNewCity(city: City): void {
    this.newCityEvent.emit(city);
  }

}
