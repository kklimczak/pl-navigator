import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Polygon, polygon} from 'leaflet';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit, OnChanges {

  @Input() coordinates: [number, number][];
  private layer: Polygon;

  constructor() { }

  getLayer(): Polygon {
    return this.layer;
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.coordinates) {
      this.layer = polygon([this.coordinates], {
        weight: 1,
        opacity: 1,
        color: '#304187',
        fillOpacity: 0.6,
        fillColor: '#cb2025'
      });
    }
  }

}
