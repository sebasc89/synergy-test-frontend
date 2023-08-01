import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAppliancesComponent } from './home/list-appliances/list-appliances.component';
import { CreateApplianceComponent } from './create-appliance/create-appliance/create-appliance.component';

const routes: Routes = [
  { path: 'Appliances', component: ListAppliancesComponent },
  { path: 'Create-appliance', component: CreateApplianceComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
