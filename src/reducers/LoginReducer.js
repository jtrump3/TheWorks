import * as types from '../actions/ActionTypes';  
const initialState = {
    isLoggedIn: false,
};
export function LoginReducer(state = initialState, action){
    console.log(state)
    switch(action.type) {
        case types.LOGIN:
            return {isLoggedIn: true};
        case types.LOGOUT:
            return {isLoggedIn: false};
        default: 
            return state;
      }
}
