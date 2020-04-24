import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../main-store';
import { EMPLOYEE_LIST, LOADING } from '../action';
import { NgRedux } from '@angular-redux/store';
import { ProductResultModel } from '../employee/model/ProductResult';
import { ProductResultObj } from '../employee/model/ProductResultObj';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 data: ProductResultObj;
 prodLists: Array<ProductResultModel>;
  constructor(private http: HttpClient, private ngRedux: NgRedux <AppState>) { }
  read() {
    return this.http.get('http://localhost:2000/api/getAllProducts');
  }
  getProducts(data) {
    const params = paramsStringify(data);
    const filterUrl = 'http://localhost:2000/api/getAllProducts' + params;
    this.http.get<ProductResultObj>(filterUrl).subscribe((data: ProductResultObj) => {
      this.prodLists = data.data;
      this.prodLists.push({name: 'india', price: 34, startDate: '12/10/20', endDate: '10/13/20'});
      this.prodLists.push({name: 'john', price: 45, startDate: '12/14/20', endDate: '10/11/20'});
      this.prodLists.map((product) => {
        if (product.price == null) {
          product.price = 40;
        }
      });
      this.ngRedux.dispatch({type: EMPLOYEE_LIST, data: this.prodLists});
      this.ngRedux.dispatch({type: LOADING, data: false});
    }, err => {
      this.ngRedux.dispatch({type: LOADING, data: false});
      console.log('Error in Filtering products', err);
    }

    );

  //  return this.http.get('http://localhost:2000/api/getAllProducts');
  }
}

export function paramsStringify(filterObj: any): string {
  //  debugger;
  let finalParams = '';
  let params = {};
  let keys = Object.keys(filterObj);
  //  console.log(keys);
  keys.map(k => {
    // console.log(filterObj[k]);
    if (filterObj[k]) {
      // copying key value pairs into params variable
      params = { ...params, [k]: filterObj[k] };
    }
  });
  finalParams = '?';
  keys = Object.keys(params);
  keys.map(k => {
    finalParams = (finalParams === '?' ? finalParams : finalParams + '&') + k + '=' + params[k].toString();
  });
  return finalParams;
}

  // export function   paramsStringify(filterObj: any) :string{

//   let finalParams:string = '';
//   let params = {};
//   let tempFilter:SavesFilterModel = new SavesFilterModel();
//   let keys = Object.keys(tempFilter);

//    keys.map(k => {
//      if (filterObj[k]) {
//        if ((k === "state" && !filterObj[k].dispName)) {
//          return null
//        } 
//        else {
//          params = {
//            ...params,
//            [k]: filterObj[k]
//          }
//        }
//      }
//    })
//    finalParams = "?";
//    keys = Object.keys(params)
//    keys.map(k => {
//      if (k === 'state') {
       
//        finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "stateCode" + "=" + params[k]['num'];
//      }
//      else  if (k === 'fedStdTxtId') {  
//       finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "fedStdRefNum" + "=" + encodeURIComponent(params[k].toString());
//     } else if (k=== 'stateStdId'){
//       finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "stateStdRefNum" + "=" + encodeURIComponent(params[k].toString());
//     }
//      else if (k === 'begDt' || k === 'endDt') {
       
//        const date = `${params[k]['month']}-${params[k]['day']}-${params[k]['year']}`
//        finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + k + "=" + date
//      } else  if(k === 'stateSaveDbId'){
      
//         finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "saveDbId" + "=" + params[k].toString();
//     }
//      else {
//        finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + k + "=" + params[k].toString();
//      }
//    })
 
//    return finalParams;
//  }
