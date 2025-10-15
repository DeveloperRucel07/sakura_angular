import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { HowToOrder } from './how-to-order/how-to-order/how-to-order';
import { OurMenu } from './our-menu/our-menu/our-menu';
import { Location } from './location/location';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, LandingPageComponent, HowToOrder, OurMenu, Location],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
