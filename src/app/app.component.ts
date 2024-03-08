import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { RouterOutlet } from '@angular/router';

import { GarageComponent } from './garage/garage.component';
import { WinnersComponent } from './winners/winners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PrimengModule,
    RouterOutlet,
    GarageComponent,
    WinnersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'async-race';
}
