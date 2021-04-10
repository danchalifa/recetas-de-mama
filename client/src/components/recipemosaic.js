import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import FadeIn from "react-fade-in";
import { useHistory, withRouter, Redirect } from "react-router-dom";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.category = this.props.location.pathname.replace("/category/", "");
  }

  componentDidMount() {
    var uri = "http://localhost:9000/testAPI/recipesForCategory?";
    uri += "category=" + this.category;
    fetch(uri)
      .then((res) => res.json())
      .then((res) => this.setState({ recipes: this.state.recipes.concat(res) }))
      .catch((err) => err);
  }

  render() {
    return (
      <RecipeMosaic
        categorySelected={this.category}
        recipes={this.state.recipes}
      />
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1120,
    height: 900,
  },
}));

// Function to determine the grid for recipes under the current category
// function determineGrid(totalRecipes) {
//   var pattern = [
//     [1, 3, 1],
//     [1, 2, 1, 1],
//     [2, 1, 2],
//   ];

//   if (totalRecipes == 0) {
//     return new Array[0][0]();
//   }
//   var grid = Array.from(Array(3), () => new Array(Math.ceil(totalRecipes / 5)));

//   console.log("totalRecipes" + totalRecipes);

//   console.log(grid);
//   return grid;
// }

const RecipeMosaic = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const pattern = [1, 3, 1, 1, 2, 1, 1, 2, 1, 2];


  for (let [index, val] of props.recipes.entries()) {
    val["cols"] = pattern[index] % (pattern.length-1);
    console.log(val["cols"]);
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

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {props.recipes.map((recipe) => (
          <GridListTile
            key={recipe.Name}
            cols={recipe.cols}
            onClick={() => handleClick(recipe)}
          >
            <img src={"https://source.unsplash.com/user/erondu/600x400"} />
            <GridListTileBar title={recipe.Name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
