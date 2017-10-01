import {Component, OnInit} from '@angular/core';
import {FetchService} from '../../services/fetch.service';
import {Building} from '../../models/building';
import {divIcon, latLngBounds} from 'leaflet';
import {PolygonComponent} from '../polygon/polygon.component';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public buildings: Building[] = [];
  public hiddenSidebar = true;
  public selectedBuilding: Building;

  constructor(private fetchService: FetchService, private mapService: MapService) { }

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
    this.hiddenSidebar = false;
    this.selectedBuilding = polygon.properties;

    const mq: MediaQueryList = window.matchMedia('screen and (max-width: 640px)');
    this.mapService.getMap().flyToBounds(polygon.getLayer().getBounds(), {
      paddingBottomRight: mq.matches ? [0, 300] : [300, 0]
    });


    // this.mapService.getMap().on('click', this.onMapClick, this);
  }

  closeSidebar() {
    this.hiddenSidebar = true;
    this.mapService.getMap().flyToBounds(latLngBounds(this.selectedBuilding.geometry));
    this.selectedBuilding = null;
  }

  onMapClick() {
    this.hiddenSidebar = true;
    // this.mapService.getMap().off('click', this.onMapClick, this);
  }

  ngOnInit() {
    this.fetchService.getAllBuildings()
      .subscribe(
        response => this.buildings = response
      );
  }

}
