import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home.js"
import About from "./components/about.js"
//import { Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
        <Router>
            <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            </Switch>
        </Router>
           
            /* <div>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </div>
            */

        );
    }
}

export default App;
