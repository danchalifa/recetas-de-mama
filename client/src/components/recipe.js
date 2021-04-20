import React, { Component, useContext } from "react";
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

export default class extends React.Component {
  
  constructor(props) {
    super(props); 
    this.english = false;
  }

  render() {
      console.log(this.props.location.state)
      console.log(this.props.english);
    if (this.props.english){
      return (
        <div>
          <div class="image">
            <p class="recipeTitle">
              {this.props.location.state.recipe.Name_English}
              <h3 class="subHeader"> Prep Time: {this.props.location.state.recipe.Prep_Time} min </h3>
              <h3 class="subHeader"> Cook Time: {this.props.location.state.recipe.Cook_Time} min </h3>
            </p>
          </div>
        <div class='outerMost'>
            <div>
              <p class="headerText"> Ingredients: </p>
              <br></br>
              <div
                class="bodyFormat"
                dangerouslySetInnerHTML={{
                  __html: this.props.location.state.recipe.Ingredients_English,
                }}
              />
              <br></br>
            </div>

            <div>
              <p class="headerText"> Directions: </p>
              <br></br>
              <div
                class="bodyFormat"
                dangerouslySetInnerHTML={{
                  __html: this.props.location.state.recipe.Directions_English,
                }}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div class="image">
            <p class="recipeTitle">
              {this.props.location.state.recipe.Name}
              <h3 class="subHeader"> Tiempo de Preparacion: {this.props.location.state.recipe.Prep_Time} min </h3>
              <h3 class="subHeader"> Tiempo de Concinar: {this.props.location.state.recipe.Cook_Time} min </h3>
            </p>
          </div>
        <div class='outerMost'>
          <div>
            <p class="headerText"> Ingredientes: </p>
            <br></br>
            <div
              class="bodyFormat"
              dangerouslySetInnerHTML={{
                __html: this.props.location.state.recipe.Ingredientes,
              }}
            />
            <br></br>
          </div>

          <div>
            <p class="headerText"> Direcciones: </p>
            <br></br>
            <div
              class="bodyFormat"
              dangerouslySetInnerHTML={{
                __html: this.props.location.state.recipe.Direcciones,
              }}
            />
          </div>
        </div>
        </div>
      );

    }
      
  }
}

