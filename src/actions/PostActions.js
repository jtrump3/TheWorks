import PostApi from "../api/PostApi";
import * as types from './ActionTypes';  


export function loadPostsSuccess(post) {  
  return {type: types.LOAD_POSTS_SUCCESS, post};
}

export function addPostSuccess(post){
  return{type: types.ADD_POST_SUCCESS, post};
}

export function deletePostSuccess(post){
  return{type: types.DELETE_POST_SUCCESS, post};
}

export function loadPosts() {  
  return function(dispatch) {
    return PostApi
    .loadPosts()
    .then(post => {
      dispatch(loadPostsSuccess(post));
    }).catch(error => {
      throw error;
    });
  };
}
export function addPost(post) {
  return function(dispatch) {
    return PostApi
    .addPost(post)
    .then(responsePost => {
      dispatch(addPostSuccess(responsePost));
    }).catch(error =>{
      throw(error);
    });
  };
}
export function deletePost(postId) {
  return function(dispatch) {
    return PostApi
    .deletePost(postId)
    .then(responsePost => {
      dispatch(deletePostSuccess(responsePost));
    }).catch(error =>{
      throw(error);
    })
  }
}