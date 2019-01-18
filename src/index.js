import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore, applyMiddleware} from 'redux';  
import { Provider } from "react-redux";
import CommonReducer from "./reducers/CommonReducer"
import thunk from 'redux-thunk';
import { loadPosts } from "./actions/PostActions";

function configureStore() {
    return createStore(CommonReducer, applyMiddleware(thunk));
}
const store = configureStore();
store.dispatch(loadPosts());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));