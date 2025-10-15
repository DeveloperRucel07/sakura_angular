import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule],
    template:`
        <div class="header">
            <h1>SAKURA RAMEN</h1>
            <p>THE BEST RAMEN IN TOWN</p>
        </div>
    
    ` ,
    styleUrls: ['./landingPage.component.scss', ],
})


export class LandingPageComponent {}