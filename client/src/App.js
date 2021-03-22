import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/banner.js"
import CategoryMosaic from './components/categorymosaic.js'
import { Button, Navbar ,Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


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

                <Navbar bg="light" expand="lg" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#categories">Categories</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>     
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                
                <Banner />
                
                
                <CategoryMosaic/>
            </div>
  
        );
    }
}

export default App;
