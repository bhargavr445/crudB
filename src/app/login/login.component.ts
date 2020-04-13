import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurdServiceService } from '../curd-service.service';
import { LOGIN_STATUS, USER_NAME } from '../action';
import { AppState } from '../main-store';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginClicked: boolean;
  loggedIn: boolean;
  constructor(private fb: FormBuilder, private router: Router,
              private service: CurdServiceService, private ngRedux: NgRedux<AppState>) { }
  loginResponse: any;
  ngOnInit() {
    this.ngRedux.select(state => {
      return state.home.loggedIn;
    }).subscribe(
      (data) => {
       this.loggedIn = data;
       console.log(this.loggedIn);
      }
    );
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
      this.ngRedux.dispatch({type: LOGIN_STATUS, data: true});
      this.ngRedux.dispatch({type: USER_NAME, data: this.loginResponse.resp._source.email});
      this.router.navigate(['employee/filter-results']);

      }, err => {
      this.ngRedux.dispatch({type: LOGIN_STATUS, data: false});
      this.ngRedux.dispatch({type: USER_NAME, data: ''});
      console.log('Login Failed', err);
      }
    );
    }
  }
}
