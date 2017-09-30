import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Polygon, polygon} from 'leaflet';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit, OnChanges {

  @Input() coordinates: [number, number][];

  @Output() onClick: EventEmitter<PolygonComponent> = new EventEmitter();

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
        fillOpacity: 0.2,
        fillColor: '#304187'
      });

      this.layer.on('click', () => {
        this.onClick.emit(this);
      });
    }
  }

}
