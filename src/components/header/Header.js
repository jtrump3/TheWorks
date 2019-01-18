import React, { Component} from 'react';
import IconCogs from "../icons/IconCogs";
import "./Header.scss";
class Header extends Component{
    render(){
        return(
            <div className="p-4 row mx-0 d-flex align-items-end header border-bottom border-white">
                <div>
                    <IconCogs width="100"/>
                    <span className="text-light ml-4 display-3 font-weight-bold">THE WORKS</span>
                </div>
                <a className="ml-auto h3 text-warning p-0 mb-0 mr-5" hidden={!this.props.loggedIn} onClick={this.props.signOut}>
                    Sign out
                </a>
            </div>
        )
    }
}
export default Header;
