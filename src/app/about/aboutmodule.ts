import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

const route: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  declarations: [AboutComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AboutModule { }
