import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "./recipe.css";
import Banner from "../images/BannerMast.png";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <div class="image">
            <p class="recipeTitle">{this.props.location.state.recipe.Name}
                <h3 class="subHeader"> Cook Time: 15min </h3>
                <h3 class="subHeader"> Prep Time: 15min </h3>
            </p>
        </div>
        
        <div>
          <p class="headerText"> Ingredients: </p>
          <p class="bodyFormat">{this.props.location.state.recipe.Text} </p>
        </div>
      
    </div>



    );
  }
}

