import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    value: new FormControl()
  });

  find() {
    console.log(this.searchForm.get('value').value);
  }

  constructor() { }

  ngOnInit() {
  }

}
