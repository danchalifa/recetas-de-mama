import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

export default class extends React.Component {

    
     constructor(props) {
        super(props);
    }


    render() {
        return (
          <div>
            <div>{this.props.location.state.recipe.Name}</div>
            <div>{this.props.location.state.recipe.Text}</div>
          </div>
        );
    }

}

