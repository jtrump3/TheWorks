import * as types from '../actions/ActionTypes';  

export const initialState = {};
export function PostReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.post;
    case types.ADD_POST_SUCCESS:
      return action.post;
    case types.DELETE_POST_SUCCESS:
      return action.post;
    default: 
      return state;
  }
}
