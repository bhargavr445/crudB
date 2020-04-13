import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../employee/employee-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-fliter',
  templateUrl: './employee-fliter.component.html',
  styleUrls: ['./employee-fliter.component.css']
})
export class EmployeeFliterComponent implements OnInit {
  data: any;
  newForm: FormGroup;
  constructor(private fb: FormBuilder,
              private service: EmployeeServiceService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newForm = this.fb.group({
      name: [null],
      price: [null]
    });
  }

  filterProducts() {
    console.log(this.newForm.getRawValue());
    this.service.getProducts(this.newForm.getRawValue());
  }
}

