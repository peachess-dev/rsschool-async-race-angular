import { AppModule } from './app.module';
import { PrimengModule } from './shared/primeng.module';
import { RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { GarageComponent } from './garage/garage.component';
import { WinnersComponent } from './winners/winners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
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
