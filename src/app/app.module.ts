import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { VideoTourComponent } from './video-tour/video-tour.component';
import { Highlights2Component } from './highlights2/highlights2.component';
import { TabComponent } from './highlights2/tab/tab.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetStartedComponent,
    HighlightsComponent,
    VideoTourComponent,
    Highlights2Component,
    TabComponent,
    PricingTableComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
