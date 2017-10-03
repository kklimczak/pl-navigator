import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Control, DomUtil, LatLng, latLng, Map} from 'leaflet';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-navi-control',
  templateUrl: './navi-control.component.html',
  styleUrls: ['./navi-control.component.scss']
})
export class NaviControlComponent implements OnInit {

  @Output() onLocationDetected: EventEmitter<LatLng> = new EventEmitter();
  @Output() onHomePositionSet: EventEmitter<any> = new EventEmitter();

  constructor(private mapService: MapService) {

  }

  setHomePosition() {
    this.mapService.getMap().flyTo([51.748727, 19.455349], 15);
    this.onHomePositionSet.emit();
  }

  setLocationBasedOnGeolocation() {
    navigator.geolocation.getCurrentPosition((position => {
      const latlng = latLng([position.coords.latitude, position.coords.longitude]);
      this.mapService.getMap().flyTo(latlng, 18);
      this.onLocationDetected.emit(latlng);
    }));
  }

  ngOnInit() {
  }


}
