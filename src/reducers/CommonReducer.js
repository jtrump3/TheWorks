// This file has combine  reducers.
import { LoginReducer } from "./LoginReducer";
import { PostReducer } from "./PostReducer";
import { combineReducers } from "redux";
const CommonReducer = combineReducers({
    LoginReducer,
    PostReducer,
});
export default CommonReducer;