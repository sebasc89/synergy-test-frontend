import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppliancesComponent } from './list-appliances/list-appliances.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListAppliancesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
