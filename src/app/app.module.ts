import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './shared/primeng.module';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [],
  imports: [FormsModule, PrimengModule],
  providers: [DialogService],
})
export class AppModule {}
