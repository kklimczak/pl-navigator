import {
  AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList,
  ViewChild
} from '@angular/core';
import {Map, map, tileLayer} from 'leaflet';
import {environment} from '../../../environments/environment';
import {FeatureGroupComponent} from '../feature-group/feature-group.component';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements AfterViewInit, AfterContentInit {

  @ViewChild('map') mapContainer: ElementRef;
  private map: Map;

  @ContentChildren(FeatureGroupComponent) featureGroups: QueryList<FeatureGroupComponent>;

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

  ngAfterContentInit() {
    this.featureGroups.forEach((fg: FeatureGroupComponent) => {
      this.map.addLayer(fg.getFeatureGroup());
    });
  }

}
