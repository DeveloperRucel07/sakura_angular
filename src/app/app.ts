import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { NavBarComponent } from './navBar/navBar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent, NavBarComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
