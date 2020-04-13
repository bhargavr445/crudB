
import { combineReducers } from 'redux';
import { EmployeeAppState, EMPLOYEE_INITIAL_STATE, employeeReducer } from 'src/app/employee/employee-store';
import { homeReducer, HomeAppState, HOME_INITIAL_STATE } from './store/store';

export interface AppState {
 employee: EmployeeAppState;
 home: HomeAppState;
}


export const INITIAL_STATE: AppState = {
    employee: EMPLOYEE_INITIAL_STATE,
    home: HOME_INITIAL_STATE,
};




export const rootReducer = combineReducers({
    employee: employeeReducer,
    home: homeReducer,
});
