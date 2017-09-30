import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Building} from '../models/building';

@Injectable()
export class FetchService {

  constructor(private http: HttpClient) { }

  public getAllBuildings(): Observable<Building[]> {
    return this.http.get<object>('./assets/buildings.json')
        .map((elements) => {
          const buildings = [];
          for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
              const geometry = [];
              (elements[key] as Building).geometry.forEach((point: [number, number]) => {
                geometry.push(point.reverse());
              });
              (elements[key] as Building).geometry = geometry;

              const entries = [];
              (elements[key] as Building).entries.forEach((point: [number, number]) => {
                entries.push(point.reverse());
              });
              (elements[key] as Building).entries = entries;

              buildings.push(elements[key]);
            }
          }
          return buildings;
        });
  }
}
