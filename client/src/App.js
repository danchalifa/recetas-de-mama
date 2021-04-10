import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home.js"
import About from "./components/about.js"
import Navbar from "./components/navbar.js"
import RecipeMosaic from "./components/recipemosaic.js"
import Recipe from "./components/recipe"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI/recipes")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
          <main>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/category" component={RecipeMosaic} />
              <Route path="/recipe" component={Recipe} />
            </Switch>
          </main>
        );
    }
}

export default App;
