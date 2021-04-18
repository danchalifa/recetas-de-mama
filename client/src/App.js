import React, { Component, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home.js"
import About from "./components/about.js"
import Navbar from "./components/navbar.js"
import RecipeMosaic from "./components/recipemosaic.js"
import Recipe from "./components/recipe"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './context/AppContext.js'
import Footer from './components/footer.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" , english:false};
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI/recipes")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
    const user = this.context;
  }

  toggleHandler = (checked) => {
    if(checked){
      this.setState({ english:true });
    } else {
      this.setState({ english:false });
    }
  };

  render() {

    return (
      <main>
        <Navbar toggleHandler={this.toggleHandler} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/category" component={RecipeMosaic} />
          <Route
            path="/recipe"
            render={(props) => <Recipe {...props} english={this.state.english} />}
          />
        </Switch>
        <Footer/>
        
      </main>
    );
  }
}

export default App;
