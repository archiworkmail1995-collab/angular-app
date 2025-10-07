import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Vehicledata {
  baseurl = 'https://localhost:7149/api/Vehicles/admin-users'; 

  constructor(
    private http: HttpClient
  ) {

    // this.getAllRecords();

  }
  
  getVehicleData(start: string, end: string): Observable<any[]> {
    const url = `${this.baseurl}?startdate=${start}&enddate=${end}`;
    return this.http.get<any[]>(url);
  }
  
}
