import { Routes } from '@angular/router';
import { GarageComponent } from './garage/garage.component';
import { RaceComponent } from './race/race.component';
import { WinnersComponent } from './winners/winners.component';

export const routes: Routes = [
  { path: '', component: GarageComponent },
  { path: 'garage', component: GarageComponent },
  { path: 'race', component: RaceComponent },
  { path: 'winners', component: WinnersComponent },
];
