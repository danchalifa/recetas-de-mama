import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import ToggleSwitch from './toggleswitch.js'
import './categorymosaic.js'

export default class extends React.Component {   

      render() {
        return (
          <Navbar fixed='top' bg="light" expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link class='nav-links' href="/">Home</Nav.Link>
                <Nav.Link class='nav-links' href="#testID">Categories</Nav.Link>
                <Nav.Link class='nav-links' href="/about">About</Nav.Link>
                {/* <Nav.Link class='nav-links' href="/categories">Categories</Nav.Link> */}
                {/* <Nav.Link class='nav-links' href="/shop">Shop</Nav.Link> */}
              </Nav>

              <Form inline>
                <ToggleSwitch toggleHandler={this.props.toggleHandler}/>
              </Form>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button class='nav-links' variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        );
        }
}
  