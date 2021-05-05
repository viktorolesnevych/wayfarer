import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../../models/City';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../../../services/city.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {

  // input can be used to grab city from home-page (1st approach)
  @Input() city: City;
  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = this.cityService.getCities().find(city => {
          return city.name === params.get('city-name');
          console.log(city.name);
        });
      });
  }

}
