import React, { Component} from "react";
import "./App.css";
import Home from "./components/home.js"
import About from "./components/about.js"
import Navbar from "./components/navbar.js"
import RecipeMosaic from "./components/recipemosaic.js"
import Recipe from "./components/recipe"
import { Route, Switch } from 'react-router-dom';
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
      english: cookies.get('english') === 'true' || false };
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
