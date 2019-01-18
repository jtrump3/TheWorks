
import * as React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import LoginReducer from "./reducers/LoginReducer";
class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {!this.props.loggedIn &&
                            <Route path="/" render={this.loginRoute} />
                        }
                        {this.props.loggedIn &&
                            <Route path="/" render={this.homeRoute} />
                        }
                    </Switch>
                </Router>
            </div>
        );
    }
    homeRoute({ match }) {
        return <Homepage/>;
    }
    loginRoute({match}) {
        return <Login/>;
    }

}
export default Routes;