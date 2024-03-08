import { Component } from '@angular/core';
import { PrimengModule } from '../primeng.module';
import { CarListComponent } from './car-list/car-list.component';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [PrimengModule, CarListComponent],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss',
})
export class GarageComponent {}
