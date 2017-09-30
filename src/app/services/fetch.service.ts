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
              buildings.push(elements[key]);
            }
          }
          return buildings;
        });
  }
}
