import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { ReadComponent } from './read/read.component';
// import {EmployeeModule} from './employee/employee.module'

const routes: Routes = [
  // {path:'read', component: ReadComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
