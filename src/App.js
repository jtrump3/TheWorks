import React, { Component} from 'react';
import Login from "./components/login/Login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Ribbon from "./components/ribbon/Ribbon";
import Routes from "./Routes";
import LoginReducer from "./reducers/LoginReducer";
import "./App.scss";
class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
           loggedIn: false,
        };
    }
    componentWillReceiveProps(props){
        this.setState({loggedIn: props.loggedIn})
    }
    render(){
        console.log(this.state.loggedIn)
        return(
            <div className="App">
                <Header signOut={this.toggleLoggedIn} loggedIn={this.state.loggedIn}/>
                <Ribbon loggedIn={this.state.loggedIn}/>
                <Routes loggedIn={this.state.loggedIn}/>
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {loggedIn: state.LoginReducer.isLoggedIn}
  }
export default connect(mapStateToProps)(App);

  