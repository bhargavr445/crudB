import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurdServiceService } from '../curd-service.service';
import { LOGIN_STATUS, USER_NAME, LOADING } from '../action';
import { AppState } from '../main-store';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private router: Router,
              private service: CurdServiceService, private ngRedux: NgRedux<AppState>) { }
  loginForm: FormGroup;
  loginClicked: boolean;
  loggedIn: boolean;
  private subscription = new  Subscription();
  loginResponse: any;

  // doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  // doughnutChartData: MultiDataSet = [
  //   [55, 25, 20]
  // ];
  // doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {
    const sub1 = this.ngRedux.select(state => {
      return state.home.loggedIn;
    }).subscribe(
      (data) => {
        this.loggedIn = data;
        console.log(this.loggedIn);
      }
      );
    this.subscription.add(sub1);
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
    this.ngRedux.dispatch({type: LOADING, data: true});
    this.service.getLoginResponse(this.loginForm.getRawValue()).subscribe(
      (loginResponse) => {
      this.loginResponse = loginResponse;
      // console.log(this.loginResponse);
      // console.log(this.loginResponse.resp._source.email);
      // console.log(this.loginResponse.token);
      sessionStorage.setItem('auth', this.loginResponse.token);
      this.ngRedux.dispatch({type: LOGIN_STATUS, data: true});
      this.ngRedux.dispatch({type: USER_NAME, data: this.loginResponse.resp._source.email});
      this.ngRedux.dispatch({type: LOADING, data: false});
      this.router.navigate(['employee/filter-results']);

      }, err => {
      this.ngRedux.dispatch({type: LOGIN_STATUS, data: false});
      this.ngRedux.dispatch({type: USER_NAME, data: ''});
      this.ngRedux.dispatch({type: LOADING, data: false});
      console.log('Login Failed', err);
      }
    );
    }
  }
  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }
}
