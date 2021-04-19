import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
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

            <div id="testID">
            <div style={{marginTop: '100px'}}></div>
            <h1 style={{textAlign: 'center'}}>Categories</h1>
            <Mosaic categories={this.state.categories}/>
            </div>

        )
    }

}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Mosaic = (props)=> {
  const history = useHistory();
  const classes = useStyles();

  var handleClick = (category) =>{
    // var categoryParsed = category.replace(/[^\w\s]/gi, '')
    var route = "/category/" + category.CatID;
    this.state.categoryInContext = category

    let letState = [...this.state.items];
     

    this.setState({items});


    history.push(route,{...props})

  } 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {props.categories.map((category) => (
              <Grid item xs={3} onClick={() => handleClick(category)}>
                <Paper className={classes.paper}>{category.Type}</Paper>
              </Grid>
          ))}
      </Grid>
    </div>
  );
}
