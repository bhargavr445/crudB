import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../employee/employee-service.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../main-store';
import { ProductResultModel } from '../../model/ProductResult';
import { employeeReducer } from 'src/app/employee/employee-store';
import { tassign } from 'tassign';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  employeeRed: Array<ProductResultModel> = [];
   data: any;
   result: Array<any>;
   filterText: number;
   filterdata: Array<ProductResultModel>;
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
         // this.employeeRed = result;
         this.employeeRed = JSON.parse(JSON.stringify(result));
        // this.employeeRed = tassign(this.employeeRed, result);
         console.log(this.employeeRed);
        // console.log(this.employeeRed);
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

originalData() {
  this.filterText = null;
  this.ngRedux.select(state => {
    return state.employee.employeeList;
  }).subscribe(
    (result) => {
      this.employeeRed = JSON.parse(JSON.stringify(result));
      console.log(this.employeeRed);
      // console.log(this.employeeRed);
    });

}
onKey() {
console.log('fg', this.filterText);
// tslint:disable-next-line:prefer-const
let filteredProductList: Array<ProductResultModel> = [];
this.employeeRed.filter((x, i) => {
    if (x.price === this.filterText) {
      // this.originalData();
      // this.employeeRed.splice(i, 1);
    } else {
     // this.originalData();
     this.employeeRed.splice(i, 1);
    }
});
// let index = this.employeeRed.findIndex( (x) => x.price === this.filterText);
// console.log(index);
// this.employeeRed.splice(index, 1);
// this.employeeRed.filter((product) => {
//   if (product.price === this.filterText) {
 

//   //  filteredProductList.push(product);
//   // this.employeeRed.findIndex(product);
//   // filteredProductList.slice()
//   // const elementPos = array.map( function(product.price) {return x.id; }).indexOf();
//   // const objectFound = array[elementPos];
//   }
// });
console.log(this.employeeRed);
}
}
