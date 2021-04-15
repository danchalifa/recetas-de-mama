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
import Banner from "../images/BannerMast.png";
import AppContext from '../context/AppContext.js'

export default class extends React.Component {
  constructor(props) {
    // const myContext = useContext(AppContext);
    // props.English = myContext.English
    super(props); 
    //console.log(props)
  }

  isEnglish = false

  render() {

    this.isEnglish = window.English
    console.log(window)
    
    return (
    <div>
        <div class="image">
            <p class="recipeTitle">{this.props.location.state.recipe.Name}
                <h3 class="subHeader"> Cook Time: 15min </h3>
                <h3 class="subHeader"> Prep Time: 15min </h3>
            </p>
        </div>
        
        <div>
          <p class="headerText"> Ingredientes: </p>
          <br></br>
          <div class="bodyFormat" dangerouslySetInnerHTML={{ __html: this.props.location.state.recipe.Ingredientes }} />
          <br></br>
        </div>

        <div>
          <p class="headerText"> Direcciones: </p>
          <br></br>
          <div class="bodyFormat" dangerouslySetInnerHTML={{ __html: this.props.location.state.recipe.Direcciones }} />
        </div>
      
    </div>



    );
  }
}

