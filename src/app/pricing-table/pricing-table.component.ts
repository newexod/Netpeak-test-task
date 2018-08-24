import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.less']
})
export class PricingTableComponent implements OnInit {
  pricingTable: any[];
  licenses: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.pricingTable = this.dataService.getMockPricingTable();
    this.licenses = this.dataService.getMockLicenses();
  }

  setPrice(discount: number, price: string, promo: string) {
    if (!promo) {
      return this.licenseChangeCount(discount, price)
    } else {
      return this.applyPromo(price, promo);
    }
  }

  licenseChangeCount(discount: number, price) {
    const idx = price.indexOf('$');

    if (idx !== -1) {
      let str = price.substring(0, idx);
      str -= str * discount;
      return str + '$';
    } 

    return price;
  }

  applyPromo(price, promo) {
    const idx = price.indexOf('$');

    if (promo === 'Test') {
      if (idx !== -1) {
        let str = price.substring(0, idx);
        str *= .5;
        return str + '$';
      }

      return price;
    } else {
      return price;
    }
  }
}
