import { AppModule } from './app.module';
import { PrimengModule } from './shared/primeng.module';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

import { Component } from '@angular/core';
import { GarageComponent } from './garage/garage.component';
import { RaceComponent } from './race/race.component';
import { WinnersComponent } from './winners/winners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
    PrimengModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    GarageComponent,
    RaceComponent,
    WinnersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'async-race';

  constructor(private router: Router) {}

  redirectToGarage() {
    this.router.navigate(['/garage']);
  }

  redirectToRace() {
    this.router.navigate(['/race']);
  }
  redirectToWinners() {
    this.router.navigate(['/winners']);
  }
}
