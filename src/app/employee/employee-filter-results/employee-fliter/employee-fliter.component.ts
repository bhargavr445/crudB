import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../employee/employee-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppState } from '../../../main-store';
import { NgRedux } from '@angular-redux/store';
import { LOADING, PRODUCT_FORM } from 'src/app/action';
import { ProductFilterModel } from '../../../employee/model/ProductForm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-fliter',
  templateUrl: './employee-fliter.component.html',
  styleUrls: ['./employee-fliter.component.css']
})
export class EmployeeFliterComponent implements OnInit {
  data: any;
  newForm: FormGroup;
  formData: ProductFilterModel;
  constructor(private fb: FormBuilder,
              private service: EmployeeServiceService,
              private ngRedux: NgRedux <AppState>,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.ngRedux.select(state => {
    return state.employee.productFormData;
    }).subscribe(
      (data) => {
      this.formData = data;
      if (this.formData) {
       console.log('Form Data is not void');
       this.patchValueIntoForm(this.formData);
      }
      }
    );
  }

  createForm() {
    this.newForm = this.fb.group({
      name: [null],
      price: [null]
    });
  }

  filterProducts() {
     this.ngRedux.dispatch({type: LOADING, data: true});
     console.log(this.newForm.getRawValue());
     this.ngRedux.dispatch({type: PRODUCT_FORM, data: this.newForm.getRawValue()});
     this.service.getProducts(this.newForm.getRawValue());
  }
  patchValueIntoForm(data: ProductFilterModel) {
  this.newForm.patchValue({
    name: data.name,
    price: data.price,
  });
  }
  createNewProduct() {
  this.router.navigate(['employee/create']);
  }
}

