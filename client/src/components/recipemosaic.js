import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import FadeIn from "react-fade-in";
import { useHistory, withRouter, Redirect } from "react-router-dom";
import logo1 from '../images/color-palette/1.jpg'
import logo2 from "../images/color-palette/2.jpg";
import logo3 from "../images/color-palette/3.jpg";
import logo4 from "../images/color-palette/4.jpg";
import logo5 from "../images/color-palette/5.jpg";
import './recipemosaic.css'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.category = this.props.location.pathname.replace("/category/", "");
    this.categorySelected="";
    console.log(this.props.location)
  }

  componentDidMount() {
    var uri = "http://localhost:9000/testAPI/recipesForCategory?";
    uri += "category=" + this.category;
    fetch(uri)
      .then((res) => res.json())
      .then((res) => this.setState({ recipes: this.state.recipes.concat(res) }))
      .then(
        (res) =>
          (this.categorySelected = res.find((obj) => {
            return obj.CatID === this.category;
          }))
      )
      .catch((err) => err);
  }

  render() {
    console.log(this.state) 
    if(this.props.english){
      return (
        <div class='outerMost'>
          <div>
          <div class="imageClassBlue">
            <p class="headerClass">
              {this.props.location.state.categoryInContext.Type_English}
            </p>
            <p class='subtitle'>Click on a recipe to view</p>
          </div>
          </div>

          <RecipeMosaic
            recipes={this.state.recipes}
            english={this.props.english}
          />

        </div>
      );
    }else {
      return (
        <div class='outerMost'>
          <div>
          <div class="imageClassBlue">
            <p class="headerClass">
              {this.props.location.state.categoryInContext.Type}
            </p>
            <p class='subtitle'>Haz click para ver la receta</p>
          </div>
          </div>
          <RecipeMosaic
            recipes={this.state.recipes}
            english={this.props.english}
          />
        </div>
      );
    }
    
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height:"100%",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1120,
    height: 900,
  },
}));


const RecipeMosaic = (props) => {
  const classes = useStyles();
  const history = useHistory();
  // const pattern = [1, 3, 1, 1, 2, 1, 1, 2, 1, 2];
  // val["cols"] = pattern[index] % (pattern.length - 1);
  // let randNumOneThroughFour = Math.floor(Math.random() * 3) + 1;
  
  // Generate random mosaic
  let currentRowSize = 0;
  var weightedRandomNumber = () => {
    var num = Math.floor(Math.random() * 100);
    if (num < 40) return 1;
    if (num < 80) return 2;
    if (num < 100) return 3;
  };

  let randNumOneThroughThree = weightedRandomNumber();
  console.log(randNumOneThroughThree);
  for (let [index, val] of props.recipes.entries()) {
    if (index == props.recipes.length - 1) {
      val["cols"] = 5 - currentRowSize;
    } else {
      randNumOneThroughThree = weightedRandomNumber();

      if (currentRowSize + randNumOneThroughThree > 5) {
        val["cols"] = 5 - currentRowSize;
        currentRowSize = 0;
      } else {
        val["cols"] = randNumOneThroughThree;
        currentRowSize += randNumOneThroughThree;

        if (currentRowSize == 5) {
          currentRowSize = 0;
        }
      }
    }
  }

  const totalRecipes = props.recipes.length;

  var handleClick = (recipe) => {
    var recipeParsed = recipe.Name.replace(/[^\w\s]/gi, "");
    var route = "/recipe/" + recipeParsed;
    console.log(recipe);
    history.push({
      pathname: route,
      state: { recipe: recipe },
    });
  };

  var getRandomLogo = () => {
    var logoNumber = Math.floor(Math.random() * 5) + 1;
    switch (logoNumber) {
      case 1:
        return <img src={logo1} style={{ pointerEvents: "none" }} />;
      case 2:
        return <img src={logo2} style={{ pointerEvents: "none" }} />;
      case 3:
        return <img src={logo3} style={{ pointerEvents: "none" }} />;
      case 4:
        return <img src={logo4} style={{ pointerEvents: "none" }} />;
      case 5:
        return <img src={logo5} style={{ pointerEvents: "none" }} />;
    }
  };

  if(props.english){
    return (
      <div className={classes.root} style={{backgroundColor: 'rgb(190,190,190)', padding:'80px'}}>
        <GridList cellHeight={160} className={classes.gridList} cols={5}>
          {props.recipes.map((recipe) => (
            <GridListTile
              key={recipe.Name}
              cols={recipe.cols}
              onClick={() => handleClick(recipe)}
            >
              {getRandomLogo()}
              <GridListTileBar title={recipe.Name_English} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }else{
    return (
      <div className={classes.root} style={{backgroundColor: 'rgb(190,190,190)', padding:'80px'}}>
        <GridList cellHeight={160} className={classes.gridList} cols={5}>
          {props.recipes.map((recipe) => (
            <GridListTile
              key={recipe.Name}
              cols={recipe.cols}
              onClick={() => handleClick(recipe)}
            >
              {getRandomLogo()}
              <GridListTileBar title={recipe.Name} />
            </GridListTile>
          ))}
        </GridList>
    </div>
    );
  }


  
};

