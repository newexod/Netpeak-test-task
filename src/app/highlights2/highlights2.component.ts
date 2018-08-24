import { Component, OnInit, Output } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-highlights2',
  templateUrl: './highlights2.component.html',
  styleUrls: ['./highlights2.component.less']
})
export class Highlights2Component implements OnInit {
  tabs: any[];
  selectedTab: object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tabs = this.dataService.getMockTabs();
    this.selectedTab = this.tabs[0];
  }
}
