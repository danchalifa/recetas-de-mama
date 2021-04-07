import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import Category from './category.js' 
import './categorymosaic.css'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {categories:[]};
        
    }

    componentDidMount() {
        fetch("http://localhost:9000/testAPI/types")
            .then(res => res.json())
            .then(res => this.setState({ categories: this.state.categories.concat(res)}))
            .catch(err => err);
    }

    render() {
        
        return (
            <div>
            <div style={{marginTop: '100px'}}></div>
            <h1 style={{textAlign: 'center'}}>Categories</h1>
            <Mosaic categories={this.state.categories}/>
            </div>


        )
    }

}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const Mosaic = (props)=> {
  const classes = useStyles();

  return (

    <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {props.categories.map((category) => (
              <GridListTile >
                  <img src={"https://source.unsplash.com/user/erondu/600x400"} />

                <GridListTileBar
                  title={category}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${category}`}>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>


  );
}
