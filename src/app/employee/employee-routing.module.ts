import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeFilterResultsComponent } from '../employee/employee-filter-results/employee-filter-results.component';
import { EmployeeCreateComponent } from '../employee/employee-create/employee-create.component';


const routes: Routes = [
  { path: '', component: EmployeeComponent,
    children: [
      {path: '', redirectTo: 'filter-results', pathMatch: 'full'},
      { path: 'filter-results', component: EmployeeFilterResultsComponent },
      {path: 'create', component: EmployeeCreateComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
