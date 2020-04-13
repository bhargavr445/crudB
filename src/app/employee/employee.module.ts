import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDataComponent } from '../employee/employee-filter-results/employee-data/employee-data.component';
import { EmployeeFliterComponent } from '../employee/employee-filter-results/employee-fliter/employee-fliter.component';
import { EmployeeFilterResultsComponent } from '../employee/employee-filter-results/employee-filter-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    EmployeeDataComponent,
    EmployeeFliterComponent,
    EmployeeComponent,
    EmployeeFilterResultsComponent,
  ],
  imports: [
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
  ]
})
export class EmployeeModule { }
