import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Control, DomUtil, Map} from 'leaflet';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-navi-control',
  templateUrl: './navi-control.component.html',
  styleUrls: ['./navi-control.component.scss']
})
export class NaviControlComponent implements OnInit {

  constructor(private mapService: MapService) {

  }

  setHomePosition() {
    this.mapService.getMap().flyTo([51.748727, 19.455349], 15);
  }

  setLocationBasedOnGeolocation() {
    navigator.geolocation.getCurrentPosition((position => {
      this.mapService.getMap().flyTo([position.coords.latitude, position.coords.longitude]);
    }));
  }

  ngOnInit() {
  }


}
