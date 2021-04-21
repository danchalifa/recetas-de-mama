import React from 'react';
//import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import Banner from "./banner.js"
import CategoryMosaic from './categorymosaic.js'
import FeaturedRecipes from './featuredrecipies.js'
import './home.css'

export default class extends React.Component {

    render() {
        return (
          <div id={"Home"} className='mainPadding'>
            <Banner />
            <CategoryMosaic {...this.props} />
            <FeaturedRecipes {...this.props} />
          </div>
        );
    }

}
