import { Component, OnInit } from '@angular/core';
import { AppState } from '../main-store';
import { NgRedux } from '@angular-redux/store';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  loginStatus: boolean;
  constructor(private ngRedux: NgRedux<AppState>, private router: Router) { }

  ngOnInit() {
    this.ngRedux.select(state => {
      return state.home.loggedIn;
    }).subscribe(
      (data) => {
       this.loginStatus = data;
       console.log(this.loginStatus);
      }
    );
    this.ngRedux.select(state => {
      return state.home.userName;
    }).subscribe(
      (data) => {
       this.userName = data;
       console.log(this.userName);
      }
    );
  }
  logout() {
    this.router.navigate(['login']);
  }
}
