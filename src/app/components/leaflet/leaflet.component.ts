import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList,
  ViewChild
} from '@angular/core';
import {Map, map, tileLayer} from 'leaflet';
import {environment} from '../../../environments/environment';
import {FeatureGroupComponent} from '../feature-group/feature-group.component';
import {MapService} from '../../services/map.service';
import {NaviControlComponent} from '../navi-control/navi-control.component';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements AfterViewInit, AfterContentInit {

  @ViewChild('map') mapContainer: ElementRef;
  private map: Map;

  @ContentChildren(FeatureGroupComponent) featureGroups: QueryList<FeatureGroupComponent>;
  @ContentChild(NaviControlComponent) navi: NaviControlComponent;

  constructor(private mapService: MapService) { }

  ngAfterViewInit() {
    this.map = map(
      this.mapContainer.nativeElement,
      {
        center: [51.748727, 19.455349],
        zoom: 15
      }
    );

    this.mapService.setMap(this.map);

    const tiles = tileLayer(environment.mapTilesUrl);

    this.map.addLayer(tiles);

    this.featureGroups.forEach((fg: FeatureGroupComponent) => {
      this.map.addLayer(fg.getFeatureGroup());
    });

  }

  ngAfterContentInit() {

  }

}
