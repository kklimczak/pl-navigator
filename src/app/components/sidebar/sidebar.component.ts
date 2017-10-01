import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() hidden: boolean;

  @HostBinding('class') get hidePannel() {
    return this.hidden ? 'hidden' : '';
  }

  constructor() { }

  ngOnInit() {
  }

}
