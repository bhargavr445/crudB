import { tassign } from 'tassign';
import { EMPLOYEE_LIST } from '../action';


export interface EmployeeAppState {
    employeeList: any;
}

export const EMPLOYEE_INITIAL_STATE: EmployeeAppState = {
    employeeList: [],
};



function updateEmployeeList(state: EmployeeAppState, action) {
    // tslint:disable-next-line:no-debugger
    // debugger;
    const newState = state;
    newState.employeeList = action.data;
    console.log( newState.employeeList);
    return tassign(state, newState);
}



export function employeeReducer(state: EmployeeAppState = EMPLOYEE_INITIAL_STATE, action): EmployeeAppState {
    switch ( action.type) {
        case EMPLOYEE_LIST: return updateEmployeeList(state, action);
     }
    return state;
 }
