import { Injectable } from '@angular/core';

const MOCK_TABS = [
  {
    icon: '/assets/imgs/highlights7/Reload Icon.svg',
    iconAlt: 'Reload',
    heading: '<span class="tab-main">Sync</span> across all devices',
    text: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment.',
    image: '/assets/imgs/highlights7/Cat1.jpg',
    imageAlt: 'Cat 1'
  },
  {
    icon: '/assets/imgs/highlights7/Inbox Icon.svg',
    iconAlt: 'Inbox',
    heading: '<span class="tab-main">All emails</span> in one place',
    text: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment.',
    image: '/assets/imgs/highlights7/Cat2.jpg',
    imageAlt: 'Cat 2'
  },
  {
    icon: '/assets/imgs/highlights7/Clock Icon.svg',
    iconAlt: 'Clock',
    heading: '<span class="tab-main">Track</span> your time',
    text: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment.',
    image: '/assets/imgs/highlights7/Cat3.jpg',
    imageAlt: 'Cat 3'
  },
];

const MOCK_LICENSES = [
  {
    count: 1,
    discount: 0
  },
  {
    count: 2,
    discount: .1
  },
  {
    count: 3,
    discount: .2
  }
];

const MOCK_PRICING_TABLE = [
  {
    id: 1,
    name: 'PROFESSIONAL',
    className: 'professional',
    price: '10$',
    list: [
      {
        id: 1,
        name: 'Hundreds of elements'
      },
      { 
        id: 2,
        name: 'Style guide'
      },
      {
        id: 3,
        name: '160 icons included'
      },
      {
        id: 4,
        name: 'Sketch files'
      },
      {
        id: 5,
        name: 'Commercial licence'
      }
    ],
    button: 'Buy Now'
  },
  {
    id: 2,
    name: 'STARTER',
    className: 'starter',
    price: 'FREE',
    list: [
      {
        id: 1,
        name: 'Hundreds of elements'
      },
      {
        id: 2,
        name: 'Style guide'
      },
      {
        id: 3,
        name: '30 icons included'
      },
      {
        id: 4,
        name: 'Personal licence'
      }
    ],
    button: 'Get Free'
  }
];

const MOCK_COUNTRIES = [
  {
    name: 'Ukraine',
    cities: ['Odessa', 'Kyiv', 'Lviv', 'Kherson']
  },
  {
    name: 'Russia',
    cities: ['Moscow', 'Ekaterinburg', 'Krasnodar']
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMockTabs(): any[] {
    return MOCK_TABS;
  }

  getMockCountries(): any[] {
    return MOCK_COUNTRIES;
  }

  getMockPricingTable(): any[] {
    return MOCK_PRICING_TABLE;
  }

  getMockLicenses(): any[] {
    return MOCK_LICENSES;
  }
}
