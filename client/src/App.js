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
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = { 
      apiResponse: "", 
      english: cookies.get('english') == 'true' || false };
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
    const { cookies } = this.props;

    if (checked) {
      cookies.set("english", true, { path: "/" });
      this.setState({ english: true });
    } else {
      cookies.set("english", false, { path: "/" });
      this.setState({ english: false });
    }
  };

  render() {
    console.log(this.state.english)
    return (
      <main>
        <Navbar
          toggleHandler={this.toggleHandler}
          english={this.state.english}
        />
        <Switch>
          <Route
            path="/"
            render={(props) => <Home {...props} english={this.state.english} />}
            exact
          />
          <Route
            path="/about"
            render={(props) => (
              <About {...props} english={this.state.english} />
            )}
          />
          <Route
            path="/category"
            render={(props) => (
              <RecipeMosaic {...props} english={this.state.english} />
            )}
          />
          <Route
            path="/recipe"
            render={(props) => (
              <Recipe {...props} english={this.state.english} />
            )}
          />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default withCookies(App);
