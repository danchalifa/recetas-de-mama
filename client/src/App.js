import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/banner.js"
import CategoryMosaic from './components/categorymosaic.js'
import Navbar from './components/navbar.js'

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
                <div>

                <Navbar/>
                
                <Banner />
                
                
                <CategoryMosaic/>
            </div>
  
        );
    }
}

export default App;
