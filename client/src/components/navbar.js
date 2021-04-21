import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import ToggleSwitch from './toggleswitch.js'
import './categorymosaic.js'
import './navbar.css'

export default class extends React.Component {   

      render() {
        return (
          <Navbar  bg="light" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className='nav-links' href="/" activeClassName="activeOne">Home</Nav.Link>
                <Nav.Link className='nav-links' href="/#categories" activeClassName="activeTwo">Categories</Nav.Link>
                <Nav.Link className='nav-links' href="/about" activeClassName="activeThree">About</Nav.Link>
                {/* <Nav.Link class='nav-links' href="/categories">Categories</Nav.Link> */}
                {/* <Nav.Link class='nav-links' href="/shop">Shop</Nav.Link> */}
              </Nav>

              <Form inline>
                <ToggleSwitch toggleHandler={this.props.toggleHandler}/>
                <text style={{fontWeight: "bold", fontSize:'14px'}}>English</text>
                <text style={{color: 'white'}}>...</text>
              </Form>

            <div hidden>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Buscar..."
                  className="mr-sm-2"
                />
                <Button class='nav-links' variant="outline-primary">Search</Button>
              </Form>
              </div>
            </Navbar.Collapse>
          </Navbar>
        );
        }
}
  