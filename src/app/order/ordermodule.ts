import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {path: '', component: OrderComponent}
];

@NgModule({
  declarations: [OrderComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ]
})
export class OrderModule { }
