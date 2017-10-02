import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { FeatureGroupComponent } from './components/feature-group/feature-group.component';
import { PolygonComponent } from './components/polygon/polygon.component';
import { MarkerComponent } from './components/marker/marker.component';
import {FetchService} from './services/fetch.service';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MapService} from './services/map.service';
import { NaviControlComponent } from './components/navi-control/navi-control.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent,
    FeatureGroupComponent,
    PolygonComponent,
    MarkerComponent,
    MapComponent,
    SidebarComponent,
    NaviControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
