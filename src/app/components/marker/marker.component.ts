import { Component, OnInit } from '@angular/core';
import {divIcon, Marker, marker} from 'leaflet';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  private layer: Marker;

  getLayer(): Marker {
    return this.layer;
  }

  constructor() { }

  ngOnInit() {
    this.layer = marker([51.748727, 19.455349], {
      icon: divIcon({
        html: '<div class="marker"><span class="fa fa-graduation-cap fa-lg"></span></div>',
        className: 'marker-wrapper',
        iconAnchor: [20, 20],
        iconSize: [40, 40]
      })
    });
  }

}
