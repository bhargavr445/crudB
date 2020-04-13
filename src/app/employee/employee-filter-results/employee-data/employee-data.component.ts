import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../employee/employee-service.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../main-store';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  employeeRed: any;
   data: any;
   result: Array<any>;
  constructor(private service: EmployeeServiceService, private ngRedux: NgRedux <AppState>) { }

  ngOnInit() {
    // this.service.productData.subscribe((result) => {
    //   // Subscribed to the observable in of Behavioural Subject
    //   this.result = result;
    //   console.log('data in result component', this.result);
    // });
    this.ngRedux.select(state => {
      return state.employee.employeeList;
    }).subscribe(
      (result) => {
        this.employeeRed = result;
        console.log(this.employeeRed);
      });
  }
  readOnly() {
    // debugger;
  this.service.read().subscribe(
    (data) => {
     this.data = data;
     console.log(this.data);
    }
  );
}
}
