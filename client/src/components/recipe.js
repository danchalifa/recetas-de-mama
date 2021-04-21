import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe.css";

export default class extends React.Component {
  
  constructor(props) {
    super(props); 
    this.english = false;
  }

  render() {

    if (this.props.english){
      return (
        <div className='mainPadding'>
          <div className="image">
            <div className="recipeTitle">
              {this.props.location.state.recipe.Name_English}
              <p className="subHeader" > Prep Time: {this.props.location.state.recipe.Prep_Time} min </p>
              <p className="subHeader" > Cook Time: {this.props.location.state.recipe.Cook_Time} min </p>
            </div>
          </div>
        <div className='outerMost'>
            <div>
              <p className="headerText"> Ingredients: </p>
              <br></br>
              <div
                className="bodyFormat"
                dangerouslySetInnerHTML={{
                  __html: this.props.location.state.recipe.Ingredients_English,
                }}
              />
              <br></br>
            </div>

            <div>
              <p className="headerText"> Directions: </p>
              <br></br>
              <div
                className="bodyFormat"
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
        <div className='mainPadding'>
          <div className="image">
            <div className="recipeTitle">
              {this.props.location.state.recipe.Name}
              <p className="subHeader"> Tiempo de Preparacion: {this.props.location.state.recipe.Prep_Time} min </p>
              <p className="subHeader"> Tiempo de Concinar: {this.props.location.state.recipe.Cook_Time} min </p>
            </div>
          </div>
        <div className='outerMost'>
          <div>
            <p className="headerText"> Ingredientes: </p>
            <br></br>
            <div
              className="bodyFormat"
              dangerouslySetInnerHTML={{
                __html: this.props.location.state.recipe.Ingredientes,
              }}
            />
            <br></br>
          </div>

          <div>
            <p className="headerText"> Direcciones: </p>
            <br></br>
            <div
              className="bodyFormat"
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

