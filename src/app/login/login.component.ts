import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurdServiceService } from '../curd-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginClicked: boolean;
  constructor(private fb: FormBuilder, private service: CurdServiceService) { }
  loginResponse: any;
  ngOnInit() {
    this.createLoginForm();
  }
    createLoginForm() {
    this.loginForm = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.maxLength(15)])]
    });
  }
  Login() {
    console.log(this.loginForm);
    this.loginClicked = true;
    if (this.loginForm.valid) {
    this.loginClicked = false;
    this.service.getLoginResponse(this.loginForm.getRawValue()).subscribe(
      (loginResponse) => {
      this.loginResponse = loginResponse;
      console.log(this.loginResponse);
      console.log(this.loginResponse.resp._source.email);
      console.log(this.loginResponse.token);
      sessionStorage.setItem('auth', this.loginResponse.token);
      }
    );
    }
  }
}
