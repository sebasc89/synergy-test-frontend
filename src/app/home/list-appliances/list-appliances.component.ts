import { Component, OnInit } from '@angular/core';
import { Appliance } from 'src/app/models/appliance';
import { ApplianceService } from 'src/app/services/appliance.service';

@Component({
  selector: 'app-list-appliances',
  templateUrl: './list-appliances.component.html',
  styleUrls: ['./list-appliances.component.css']
})
export class ListAppliancesComponent implements OnInit {
  appliances: Appliance[] = []; 

  constructor(private applianceService: ApplianceService) { }

  ngOnInit() {
    this.getAppliances(); 
  }

  getAppliances() {
    this.applianceService.getAppliances().subscribe(
      (data) => {
        this.appliances = data;
      },
      (error) => {
        console.error('Error al obtener los electrodomésticos:', error);
      }
    );
  }
}
