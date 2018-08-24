import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {
  @Input() tabData;

  constructor() { }

  ngOnInit() {
  }

}
