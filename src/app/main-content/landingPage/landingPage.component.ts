import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule, Navbar],
    template:`
        <div class="header">
            <h1>SAKURA RAMEN</h1>
            <p>THE BEST RAMEN IN TOWN</p>
        </div>
        <app-navbar></app-navbar>
    
    ` ,
    styleUrls: ['./landingPage.component.scss', ],
})


export class LandingPageComponent {}