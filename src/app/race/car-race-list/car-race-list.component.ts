import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Car } from '../../garage/car-list/car.model';
import { CarService } from '../../garage/car-list/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CarService],
  templateUrl: './car-race-list.component.html',
  styleUrl: './car-race-list.component.scss',
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarData();
  }

  getCarData() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}
