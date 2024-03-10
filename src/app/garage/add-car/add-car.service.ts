import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class AddCarService {
  constructor(private dialogService: DialogService) {}

  openDialog(component: any, config: any = {}): void {
    this.dialogService.open(component, config);
  }

  closeDialog(): void {
    // this.dialogService.closeAll();
  }
}
