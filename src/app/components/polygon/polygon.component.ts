import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PathOptions, Polygon, polygon} from 'leaflet';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit, OnChanges {

  @Input() coordinates: [number, number][];
  @Input() properties: any;

  @Output() onClick: EventEmitter<PolygonComponent> = new EventEmitter();

  private layer: Polygon;
  private baseStyle: PathOptions;

  constructor() {
    this.baseStyle = {
      weight: 1,
      opacity: 1,
      color: '#304187',
      fillOpacity: 0.2,
      fillColor: '#304187'
    };
  }

  getLayer(): Polygon {
    return this.layer;
  }

  highlight() {
    this.layer.setStyle({
      weight: 3,
      color: 'rgb(203, 32, 37)',
      fillColor: 'rgb(203, 32, 37)'
    });
  }

  reset() {
    this.layer.setStyle(this.baseStyle);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.coordinates) {
      this.layer = polygon([this.coordinates], this.baseStyle);

      this.layer.on('click', () => {
        this.onClick.emit(this);
      });
    }
  }

}
