import React, { Component} from 'react';
import Homepage from "./Homepage";
import Header from "./Header";
import Ribbon from "./Ribbon";
import "./App.scss";
class App extends Component{
    render(){
        return(
            <div className="App">
                <Header/>
                
                {/* <Homepage login={this.login} test={"test"}/> */}
            
                <Ribbon/>
            </div>
        )
    }

}
export default App;


  