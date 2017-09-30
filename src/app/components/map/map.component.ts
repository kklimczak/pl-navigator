import { Component, OnInit } from '@angular/core';
import {FetchService} from '../../services/fetch.service';
import {Building} from '../../models/building';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public buildings: Building[] = [];

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.fetchService.getAllBuildings()
      .subscribe(
        response => this.buildings = response
      );
  }

}
