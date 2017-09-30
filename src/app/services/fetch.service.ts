import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {Building} from '../models/building';

@Injectable()
export class FetchService {

  constructor(private http: HttpClient) { }

  public getAllBuildings(): Observable<Building[]> {
    return this.http.get<Map<string, Building>>('https://nav.p.lodz.pl/data/buildings.json')
        .map((map) => {
          const buildings = [];
          map.forEach((element) => {
            buildings.push(element);
          });
          return buildings;
        });
  }
}
