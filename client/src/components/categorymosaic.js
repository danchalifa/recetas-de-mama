import React from 'react';
import './categorymosaic.css'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHistory } from 'react-router-dom'


export default class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {categories:[], categoryInContext: {} };
    }

    componentDidMount() {
        fetch("/api/types")
          .then((res) => res.json())
          .then((res) =>
            this.setState({ categories: this.state.categories.concat(res) })
          )
          .catch((err) => err);
    }

    render() {
        return (
          <div id="categories" style={{paddingLeft: '50px', paddingRight: '50px', paddingTop:'50px'}}>
            <div style={{ marginTop: "100px" }}></div>
            {this.props.english ? (
              <h1 style={{ textAlign: "center", fontWeight: 'bold', fontSize: '50px'}}>Categories</h1>
            ) : (
              <h1 style={{ textAlign: "center", fontWeight: 'bold', fontSize:'50px'}}>Categorias</h1>
            )}

            <div><br></br></div>

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

    history.push("/category/" + category.CatID, {
      ...props,
      categoryInContext: category,
    });

  } 
  if(props.english){
      return (
        <div className={classes.root}>
          <Grid container spacing={4}>
            {props.categories.map((category,index) => (
              <Grid key={index} item xs={4} onClick={() => handleClick(category)}>
                {index % 2 === 0 || index%3===2 ? (
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
              <Grid key={index} item xs={4} onClick={() => handleClick(category)}>
                {index%3===0 || index%3===2 ? (
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

