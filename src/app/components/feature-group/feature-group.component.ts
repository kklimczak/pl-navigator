import { Component, OnInit } from '@angular/core';
import {FeatureGroup} from 'leaflet';

@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss']
})
export class FeatureGroupComponent implements OnInit {

  private featureGroup: FeatureGroup;

  constructor() { }

  getFeatureGroup(): FeatureGroup {
    return this.featureGroup;
  }

  ngOnInit() {
    this.featureGroup = new FeatureGroup();
  }

}
