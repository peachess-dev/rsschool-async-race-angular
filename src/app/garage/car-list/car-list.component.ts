import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Car } from './car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CarService],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
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
