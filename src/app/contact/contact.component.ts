import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  countries: any[];
  isSubmittedForm: boolean = false;
  formData = {};
  selectedCountry;
  selectedCities: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.countries = this.dataService.getMockCountries();
  }

  submitForm(form: NgForm): void {
    this.isSubmittedForm = true;
    this.formData = form.value;
    form.reset();
  }

  getSelectCountry(country): void {
    this.selectedCountry = country.viewModel;
    
    this.countries.forEach(country => {
      if (country.name === this.selectedCountry) {
        this.selectedCities = country.cities
      }
    });
  }
}
