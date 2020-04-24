import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDataComponent } from '../employee/employee-filter-results/employee-data/employee-data.component';
import { EmployeeFliterComponent } from '../employee/employee-filter-results/employee-fliter/employee-fliter.component';
import { EmployeeFilterResultsComponent } from '../employee/employee-filter-results/employee-filter-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { RetailComponent } from './retail/retail.component';
import { ConsumerComponent } from './consumer/consumer.component';
// import { UpdateEmployeeRouteResolver } from './resolvers/UpdateEmployeeResolver';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    EmployeeDataComponent,
    EmployeeFliterComponent,
    EmployeeComponent,
    EmployeeFilterResultsComponent,
    EmployeeCreateComponent,
    // CusomerComponent,
    RetailComponent,
    ConsumerComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []// UpdateEmployeeRouteResolver]
})
export class EmployeeModule { }
