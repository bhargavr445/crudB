import { Component, OnInit } from '@angular/core';
import { AppState } from './main-store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean;
  constructor(private ngRedux: NgRedux<AppState>) { }
  ngOnInit() {
  this.ngRedux.select(state => {
    return state.home.loading;
  }).subscribe(
    (data) => {
    this.loading = data;
    console.log(this.loading);
    }
  );
  }
}
