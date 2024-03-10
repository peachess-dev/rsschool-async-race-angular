import { Component } from '@angular/core';
import { PrimengModule } from '../shared/primeng.module';
import { CarListComponent } from '../garage/car-list/car-list.component';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [PrimengModule, CarListComponent],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {}
