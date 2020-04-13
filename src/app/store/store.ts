import { tassign } from 'tassign';
import { LOGIN_STATUS, USER_NAME } from '../action';


export interface HomeAppState {
loggedIn: boolean;
userName: string;
}

export const HOME_INITIAL_STATE: HomeAppState = {
    loggedIn: false,
    userName: '',
};
function updateLogin(state: HomeAppState, action) {
    // action contains type and data dispatched in login component
    // tslint:disable-next-line:no-debugger
    // debugger;
    const newState = state;
    newState.loggedIn = action.data;
    return tassign(state, newState);
}
function updateUserName(state: HomeAppState, action) {
    // action contains type and data dispatched in login component
    // tslint:disable-next-line:no-debugger
    debugger;
    const newState = state;
    newState.userName = action.data;
    return tassign(state, newState);
}

export function homeReducer(state: HomeAppState = HOME_INITIAL_STATE, action): HomeAppState {
    switch (action.type) {
    case LOGIN_STATUS: return updateLogin(state, action);
    case USER_NAME: return updateUserName(state, action);

    }
    return state;
}

