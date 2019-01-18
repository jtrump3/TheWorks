import React, { Component} from 'react';
import "./App.scss";
class HomePage extends Component{
    render(){
        return(
            <div className="homepage d-flex px-2 justify-content-center pt-4">
                <div className="jumbotron mx-auto mt-5 align-middle py-4 sign-in bg-dark text-light">
                    <h1 className="display-4 mb-4">Sign in</h1>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                    </form>
                    <hr className="my-4"/>
                    <div className="d-flex justify-content-end">
                        <a className="btn text-primary btn-lg">Register </a>
                        <a className="btn btn-primary text-light btn-lg ml-3 px-4" onClick={this.props.login}>Log in</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;


  