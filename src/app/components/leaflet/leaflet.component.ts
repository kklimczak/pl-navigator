import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Map, map, tileLayer} from 'leaflet';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements AfterViewInit {

  @ViewChild('map') mapContainer: ElementRef;
  private map: Map;

  constructor() { }

  ngAfterViewInit() {
    this.map = map(
      this.mapContainer.nativeElement,
      {
        center: [51.748727, 19.455349],
        zoom: 15
      }
    );

    const tiles = tileLayer(environment.mapTilesUrl);

    this.map.addLayer(tiles);
  }

}
