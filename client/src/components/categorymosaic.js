import React, { Component } from 'react';
import Category from './category.js' 
import './categorymosaic.css'

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory, withRouter, Redirect } from 'react-router-dom'


export default class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {categories:[], categoryInContext: {} };
    }

    componentDidMount() {
        fetch("http://localhost:9000/testAPI/types")
            .then(res => res.json())
            .then(res => this.setState({ categories: this.state.categories.concat(res)}))
            .catch(err => err);
    }

    render() {
        return (
          <div id="categories" style={{paddingLeft: '50px', paddingRight: '50px', paddingTop:'50px'}}>
            <div style={{ marginTop: "100px" }}></div>
            {this.props.english ? (
              <h1 style={{ textAlign: "center", fontWeight: 'bold'}}>Categories</h1>
            ) : (
              <h1 style={{ textAlign: "center", fontWeight: 'bold'}}>Categorias</h1>
            )}

            <Mosaic
              categories={this.state.categories}
              english={this.props.english}
            />
          </div>
        );
    }

}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#8675bb",
    fontSize:"large",
    fontWeight: "bold",
    color: 'white'
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#9f7dba",
    fontSize:"large",
    fontWeight: "bold",
    color: 'white'
  },
}));

const Mosaic = (props)=> {
  const history = useHistory();
  const classes = useStyles();

  var handleClick = (category) =>{
    // var categoryParsed = category.replace(/[^\w\s]/gi, '')
    var route = "/category/" + category.CatID;

    history.push(route
      ,{...props, categoryInContext:category})

  } 
  if(props.english){
      return (
        <div className={classes.root}>
          <Grid container spacing={4}>
            {props.categories.map((category,index) => (
              <Grid item xs={4} onClick={() => handleClick(category)}>
                {index % 2 == 0 || index%3==2 ? (
                  <Paper className={classes.paper}>
                    {category.Type_English}
                  </Paper>
                ) : (
                  <Paper className={classes.paper2}>
                    {category.Type_English}
                  </Paper>
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      );
  } else {
      return (
        <div className={classes.root}>
          <Grid container  spacing={3}>
            {props.categories.map((category, index) => (
              <Grid item xs={4} onClick={() => handleClick(category)}>
                {index%3==0 || index%3==2 ? (
                  <Paper className={classes.paper}>{category.Type}</Paper>
                ) : (
                  <Paper className={classes.paper2}>{category.Type}</Paper>
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      );
  }


}

