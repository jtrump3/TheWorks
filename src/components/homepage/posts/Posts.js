import React, { Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';  
import intitialState, { initialState } from "../../../reducers/PostReducer"
import * as PostActions from "../../../actions/PostActions";
import 'babel-polyfill';
import "./Posts.scss";
class Posts extends Component{
    render(){
        return(
            <div className="">
               
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    let posts = [];
    let postIds = [];
    if(state != initialState && state !=null){
        Object.keys(state).forEach(function(key){
            posts.push(state[key]);
            postIds.push(key);
        })
    }
    else{
        posts = ["Be the first to post this page"];
    }
    return {posts, postIds};
    }
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(PostActions, dispatch),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Posts);
