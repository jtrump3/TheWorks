import React, { Component} from 'react';
import LoginReducer from "../../reducers/LoginReducer";
import * as LoginActions from "../../actions/LoginActions";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';  
import "./Login.scss";
class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login() {
        this.props.actions.Login()
    }
    render(){
        return(
            <div className="login d-flex px-2 justify-content-center pt-4">
                <div className="jumbotron mx-auto mt-5 align-middle py-4 sign-in bg-dark text-light">
                    <h1 className="display-4 mb-4">Sign in</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                    </form>
                    <hr className="my-4"/>
                    <div className="d-flex justify-content-end">
                        <a className="btn text-primary btn-lg">Register </a>
                        <a className="btn btn-primary text-light btn-lg ml-3 px-4" onClick={this.login}>Log in</a>
                    </div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch),
    };
}
export default connect(null, mapDispatchToProps)(Login);
 