import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeToursComponent  } from '../officetours.component';

const routes: Routes = [
  {
    path: '',
    component: OfficeToursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeToursRoutingModule { }