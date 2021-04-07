import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
            <RecipeMosaic categories={this.state.categories}/>
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
    width: 500,
    height: 450,
  },
}));
 
const RecipeMosaic = (props)=> { 
  const classes = useStyles();

  return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={7}>
                {props.categories.map((category) => (
                <GridListTile  cols={2 || 3}>
                    <img src={"https://source.unsplash.com/user/erondu/600x400"} />
                    <GridListTileBar
                        title={category}
                    />
                </GridListTile>
                ))}
            </GridList>
            </div>

  );
}
