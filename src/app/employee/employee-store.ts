import { tassign } from 'tassign';
import { EMPLOYEE_LIST } from '../action';


export interface EmployeeAppState {
    employeeList: any;
}

export const EMPLOYEE_INITIAL_STATE: EmployeeAppState = {
    employeeList: [],
};



function updateEmployeeList(state: EmployeeAppState, action) {
    const newState = state;
    //console.log(action.value);
    newState.employeeList = action.value;
    //console.log( newState.employeeList);
    return tassign(state, newState);
}



export function employeeReducer(state: EmployeeAppState = EMPLOYEE_INITIAL_STATE, action): EmployeeAppState {
    switch ( action.type) {
        case EMPLOYEE_LIST: return updateEmployeeList(state, action);
     }
    return state;
 }
