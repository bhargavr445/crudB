import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeFilterResultsComponent } from '../employee/employee-filter-results/employee-filter-results.component';
import { EmployeeCreateComponent } from '../employee/employee-create/employee-create.component';
import { RetailComponent } from '../employee/retail/retail.component';
import { ConsumerComponent } from '../employee/consumer/consumer.component';



const routes: Routes = [
  { path: '', component: EmployeeComponent,
    children: [
      {path: '', redirectTo: 'filter-results', pathMatch: 'full'},
      { path: 'filter-results', component: EmployeeFilterResultsComponent },
      {path: 'create', component: EmployeeCreateComponent},
      {path: 'retail', component: RetailComponent},
      {path: 'consumer', component: ConsumerComponent},

      // {path: 'update', component: EmployeeCreateComponent, resolve: {empUpdateRouteResolver:}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
