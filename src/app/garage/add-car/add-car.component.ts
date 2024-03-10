import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../shared/primeng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormsModule, NgForm } from '@angular/forms';
import { Car } from '../car-list/car.model';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [CommonModule, PrimengModule, FormsModule],
  providers: [],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent {
  @Input() showModal: boolean = false;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  OnCloseForm() {
    // this.CloseForm.emit(false);
    this.dialogRef.close(false);
  }

  constructor(protected dialogRef: DynamicDialogRef) {}

  @Output()
  AddCar: EventEmitter<Car> = new EventEmitter<Car>();

  onAddCar(form: NgForm) {
    // this.AddCar.emit(form.value);
    console.log('submit form', form.value);
    this.dialogRef.close(form.value);
  }

  http: HttpClient = Inject(HttpClient);
}
