import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appliance } from '../models/appliance';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {
  private apiUrl = 'https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=2f31c1ea-4c40-4b85-a90b-19bfe86cc95f';

  constructor(private http: HttpClient) { }

  getAppliances(): Observable<Appliance[]> {
    return this.http.get<Appliance[]>(this.apiUrl);
  }
}
