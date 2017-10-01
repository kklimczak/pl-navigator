import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() hidden: boolean;

  @Output() onActionButtonClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') get hidePannel() {
    return this.hidden ? 'hidden' : '';
  }

  constructor() { }

  actionButtonClick() {
    this.onActionButtonClick.emit();
  }

  ngOnInit() {
  }

}
