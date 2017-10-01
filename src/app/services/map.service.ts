import { Injectable } from '@angular/core';
import {Map} from 'leaflet';

@Injectable()
export class MapService {

  private map: Map;

  getMap() {
    return this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  constructor() { }

}
