import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { FeatureGroupComponent } from './components/feature-group/feature-group.component';
import { PolygonComponent } from './components/polygon/polygon.component';
import { MarkerComponent } from './components/marker/marker.component';
import {FetchService} from './services/fetch.service';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent,
    FeatureGroupComponent,
    PolygonComponent,
    MarkerComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
