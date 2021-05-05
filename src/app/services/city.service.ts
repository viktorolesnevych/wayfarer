import { Injectable } from '@angular/core';
import {City} from '../models/City';
import {CITIES} from '../mock/mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }
  getCities(): City[]{
    return CITIES;
  }
}
