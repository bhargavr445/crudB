import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../main-store';
import { EMPLOYEE_LIST, LOADING } from '../action';
import { NgRedux } from '@angular-redux/store';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 data: any;

  // private product = new BehaviorSubject<Array<any>>([]);

  //  productData = this.product.asObservable();
  constructor(private http: HttpClient, private ngRedux: NgRedux <AppState>) { }
  read() {
    return this.http.get('http://localhost:2000/api/getAllProducts');
  }
  getProducts(data) {
    const params = paramsStringify(data);
    const filterUrl = 'http://localhost:2000/api/getAllProducts' + params;
    this.http.get(filterUrl).subscribe((data) => {
      this.data = data;
      this.ngRedux.dispatch({type: EMPLOYEE_LIST, data: this.data});
      this.ngRedux.dispatch({type: LOADING, data: false});
    }, err => {
      this.ngRedux.dispatch({type: LOADING, data: false});
      console.log('Error in Filtering products', err);
    }

    );

  //  return this.http.get('http://localhost:2000/api/getAllProducts');
  }
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

export function paramsStringify(filterObj: any): string {
  let finalParams = '';
  let params = {};
  let keys = Object.keys(filterObj);
  keys.map(k => {
   // console.log(filterObj[k]);
    if (filterObj[k]) {
      params = {
        ...params,
        [k]: filterObj[k]
      };

    }
  } );
  finalParams = '?';
  keys = Object.keys(params);
  keys.map(k => {
    finalParams = (finalParams === '?' ? finalParams : finalParams + '&') + k + '=' + params[k].toString();
  });
  return finalParams;
  }
