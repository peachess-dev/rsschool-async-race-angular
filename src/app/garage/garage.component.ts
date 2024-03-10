import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng.module';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddCarService } from './add-car/add-car.service';
import { Car } from './car-list/car.model';
import { CarService } from './car-list/car.service';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule, PrimengModule, CarListComponent, AddCarComponent],
  providers: [AddCarService],
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
})
export class GarageComponent {
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private carService: CarService,
  ) {}

  openAddCar(): void {
    this.ref = this.dialogService.open(AddCarComponent, {
      width: '50vw',
      modal: true,
      header: 'Add a new car to your garage',
      showHeader: true,
    });

    this.ref.onClose.toPromise().then(async (result) => {
      if (!result) return; //modal is cancelled will return false
      console.log('modal closed', result);
      // call the service here
      try {
        await this.carService.addCar(result);

        console.log('Car has been added');
      } catch (err) {
        console.log('Car was not added', err);
      }
    });

    // this.ref.onClose.subscribe((result) => {
    //   if (!result) return; //modal is cancelled will return false
    //   console.log('modal closed', result);
    // });
  }
}
