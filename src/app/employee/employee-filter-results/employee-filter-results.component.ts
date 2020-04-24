import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-filter-results',
  templateUrl: './employee-filter-results.component.html',
  styleUrls: ['./employee-filter-results.component.css']
})
export class EmployeeFilterResultsComponent implements OnInit {

  constructor(public fb: FormBuilder, private router: Router) { }
  productType: any = ['Consumer', 'Retail', 'logout'];

  productForm = this.fb.group({
    name: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.productForm.value.name);
    // alert(JSON.stringify(this.oppoSuitsForm.value));
    if (this.productForm.value.name === 'Consumer') {
      this.router.navigate(['employee/consumer']);
    }
    if (this.productForm.value.name === 'Retail') {
      this.router.navigate(['employee/retail']);
    }
    if (this.productForm.value.name === 'logout') {
      this.router.navigate(['login']);
    }
  }
}
