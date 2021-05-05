import { Component, OnInit } from '@angular/core';
import {City} from '../../models/City';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currentCity: City;
  constructor() { }

  ngOnInit(): void {
  }
  setCurrentCity(city: City): void{
    this.currentCity = city;
  }

}
