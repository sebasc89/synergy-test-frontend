import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appliance } from '../models/appliance';
import { environment } from '../enviroments/environment';
import { API_GET_APPLIANCES, API_CREATE_APPLIANCE } from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {
  private apiUrl = API_GET_APPLIANCES;
  private createUrl = API_CREATE_APPLIANCE;
  
  constructor(private http: HttpClient) { }

  getAppliances(): Observable<Appliance[]> {
    return this.http.get<Appliance[]>(this.apiUrl);
  }

  createAppliance(appliance: Appliance): Observable<Appliance> {
    return this.http.post<Appliance>(this.createUrl, appliance);
  }
}
