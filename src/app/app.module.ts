import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { FeatureGroupComponent } from './components/feature-group/feature-group.component';
import { PolygonComponent } from './components/polygon/polygon.component';
import { MarkerComponent } from './components/marker/marker.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent,
    FeatureGroupComponent,
    PolygonComponent,
    MarkerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
