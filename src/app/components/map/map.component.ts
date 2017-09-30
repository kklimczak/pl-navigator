import { Component, OnInit } from '@angular/core';
import {FetchService} from '../../services/fetch.service';
import {Building} from '../../models/building';
import {divIcon} from 'leaflet';
import {PolygonComponent} from '../polygon/polygon.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public buildings: Building[] = [];

  constructor(private fetchService: FetchService) { }

  private createIcon(icon: string, size: [number, number], className: string) {
    return divIcon({
      html: `<div class="${className}"><span class="fa fa-${icon}"></span></div>`,
      className: 'marker-wrapper',
      iconAnchor: [size[0] / 2, size[1] / 2],
      iconSize: size
    });
  }

  createEntranceIcon() {
    return this.createIcon('sign-in', [20, 20], 'entrance');
  }

  displayInfoAboutBuilding(polygon: PolygonComponent) {
    alert(JSON.stringify(polygon.coordinates));
  }

  ngOnInit() {
    this.fetchService.getAllBuildings()
      .subscribe(
        response => this.buildings = response
      );
  }

}
