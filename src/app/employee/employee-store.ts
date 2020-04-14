import { tassign } from 'tassign';
import { EMPLOYEE_LIST, PRODUCT_FORM } from '../action';
import {ProductFilterModel} from './model/ProductForm';

export interface EmployeeAppState {
    employeeList: any;
    productFormData: ProductFilterModel;
}

export const EMPLOYEE_INITIAL_STATE: EmployeeAppState = {
    employeeList: [],
    productFormData: null,

};



function updateEmployeeList(state: EmployeeAppState, action) {
    // tslint:disable-next-line:no-debugger
    // debugger;
    const newState = state;
    newState.employeeList = action.data;
    console.log( newState.employeeList);
    return tassign(state, newState);
}
function updateProductFormData(state: EmployeeAppState, action) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const newState = state;
    newState.productFormData = action.data;
    return tassign(state, newState);
}




export function employeeReducer(state: EmployeeAppState = EMPLOYEE_INITIAL_STATE, action): EmployeeAppState {
    switch ( action.type) {
        case EMPLOYEE_LIST: return updateEmployeeList(state, action);
        case PRODUCT_FORM: return updateProductFormData(state, action);
     }
    return state;
 }
