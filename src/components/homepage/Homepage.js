import React, { Component} from 'react';
import "./Homepage.scss";
import Posts from "./posts/Posts"
class Homepage extends Component{
    render(){
        return(
            <div className="homepage">
            <h1> TEST</h1>
                <Posts/>
            </div>
        )
    }
}
export default Homepage;