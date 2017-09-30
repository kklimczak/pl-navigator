import { Component, OnInit } from '@angular/core';
import {FetchService} from '../../services/fetch.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.fetchService.getAllBuildings()
      .subscribe(
        response => console.log(response)
      );
  }

}
