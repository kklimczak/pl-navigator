import {Component, Input, OnInit} from '@angular/core';
import {divIcon, Icon, Marker, marker} from 'leaflet';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  @Input() coordinates: [number, number];
  @Input() icon: Icon;
  private layer: Marker;

  getLayer(): Marker {
    return this.layer;
  }

  constructor() { }

  ngOnInit() {
    this.layer = marker(this.coordinates, {
      icon: this.icon
    });
  }

}
