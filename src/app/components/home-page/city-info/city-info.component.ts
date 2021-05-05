import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../../models/City';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {

  @Input() city: City;
  constructor() { }

  ngOnInit(): void {
  }

}
