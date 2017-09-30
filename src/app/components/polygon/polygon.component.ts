import { Component, OnInit } from '@angular/core';
import {Polygon, polygon} from 'leaflet';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {

  private layer: Polygon;

  constructor() { }

  getLayer(): Polygon {
    return this.layer;
  }

  ngOnInit() {
    this.layer = polygon([[51.748727, 19.455349], [51.727, 19.455], [51.648727, 19.2], [51.748727, 19.455349]]);
  }

}
