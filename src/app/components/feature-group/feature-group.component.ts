import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {FeatureGroup} from 'leaflet';
import {PolygonComponent} from '../polygon/polygon.component';

@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss']
})
export class FeatureGroupComponent implements OnInit, AfterContentInit {

  private featureGroup: FeatureGroup;

  @ContentChildren(PolygonComponent) polygons: QueryList<PolygonComponent>;

  constructor() {
    this.featureGroup = new FeatureGroup();
  }

  getFeatureGroup(): FeatureGroup {
    return this.featureGroup;
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.polygons.forEach((polygon: PolygonComponent) => {
      this.featureGroup.addLayer(polygon.getLayer());
    });
  }

}
