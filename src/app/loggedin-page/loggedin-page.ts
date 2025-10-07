import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Vehicledata } from '../vehicledata';

@Component({
  selector: 'app-loggedin-page',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './loggedin-page.html',
  styleUrl: './loggedin-page.css',
})
export class LoggedinPage {
  start: string = '2025-01-08';
  end: string = '2025-09-30';

  constructor( private vehicleService: Vehicledata) {}

  getAllRecords() {

    this.vehicleService.getVehicleData(this.start, this.end).subscribe( response => {
      console.log('data', response);
    })
    
    // console.log('data:', data);

  }

}
