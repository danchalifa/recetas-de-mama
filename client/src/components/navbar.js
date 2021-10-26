import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import ToggleSwitch from './toggleswitch.js'
import './categorymosaic.js'
import './navbar.css'
import SearchBar from './searchbar/searchbar.js'
import BookData from "./searchbar/data.json";

export default class extends React.Component {   

      render() {

        return (
          <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="nav-links" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-links" href="/#categories">
                  Categories
                </Nav.Link>
                <Nav.Link className="nav-links" href="/about">
                  About
                </Nav.Link>
                {/* <Nav.Link class='nav-links' href="/categories">Categories</Nav.Link> */}
                {/* <Nav.Link class='nav-links' href="/shop">Shop</Nav.Link> */}
              </Nav>

              <SearchBar data={BookData} />

              <Form inline>
                <ToggleSwitch
                  toggleHandler={this.props.toggleHandler}
                  english={this.props.english}
                />
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  English
                </div>
                <div style={{ color: "white" }}>...</div>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        );
        }
}
  