import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FetchService} from '../../services/fetch.service';
import {Building} from '../../models/building';
import {divIcon, LatLng, latLngBounds, polygon} from 'leaflet';
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
  public selectedPolygon: PolygonComponent;
  public location: LatLng;

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

  createLocationIcon() {
    return this.createIcon('dot-circle-o', [20, 20], 'location');
  }

  displayInfoAboutBuilding(polygon: PolygonComponent) {
    polygon.highlight();
    if (this.selectedPolygon) {
      this.selectedPolygon.reset();
    }
    this.hiddenSidebar = false;
    this.selectedBuilding = polygon.properties;
    this.selectedPolygon = polygon;
    this.setCenterPaddingByMediaQueries(polygon);
    this.disableMapInteraction();
  }

  private setCenterPaddingByMediaQueries(polygon: PolygonComponent) {
    const mq: MediaQueryList = window.matchMedia('screen and (max-width: 640px)');
    this.mapService.getMap().flyToBounds(polygon.getLayer().getBounds(), {
      paddingBottomRight: mq.matches ? [0, 250] : [300, 0],
    });
  }

  private disableMapInteraction() {
    this.mapService.getMap().dragging.disable();
    this.mapService.getMap().scrollWheelZoom.disable();
    this.mapService.getMap().doubleClickZoom.disable();
  }

  closeSidebar() {
    this.mapService.getMap().flyToBounds(latLngBounds(this.selectedBuilding.geometry));
    this.clearSelection();
  }

  clearSelection() {
    this.hiddenSidebar = true;
    this.selectedBuilding = null;
    this.enableMapInteraction();
    if (this.selectedPolygon) {
      this.selectedPolygon.reset();
    }
  }

  private enableMapInteraction() {
    this.mapService.getMap().dragging.enable();
    this.mapService.getMap().scrollWheelZoom.enable();
    this.mapService.getMap().doubleClickZoom.enable();
  }

  setLocation(latlng: LatLng) {
    this.location = latlng;
    this.clearSelection();
  }

  ngOnInit() {
    this.fetchService.getAllBuildings()
      .subscribe(
        response => this.buildings = response
      );
  }

}
