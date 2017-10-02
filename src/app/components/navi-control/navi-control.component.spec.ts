import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviControlComponent } from './navi-control.component';

describe('NaviControlComponent', () => {
  let component: NaviControlComponent;
  let fixture: ComponentFixture<NaviControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
