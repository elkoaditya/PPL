import React, { Component } from "react";
import './App.css';
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

// Import Bootstrap Scss
import "./theme.scss";

// Import Material Ico
import "./assets/css/materialdesignicons.min.css";

// Import Bootstrap Css
import "./assets/css/mobiriseicons.css";

// Import Custom Css
import "./assets/css/menu.css";
import "./assets/css/style.css";

//Colors
import "./assets/css/colors/default.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
        return (
          <React.Fragment>
          <Router>
            <Switch>
              {routes.map((route, idx) => (
                <Route path={route.path} component={route.component} key={idx} />
              ))}
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
  }
  
  export default withRouter(App);