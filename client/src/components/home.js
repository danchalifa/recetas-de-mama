import React, { Component } from 'react';
//import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import Banner from "./banner.js"
import CategoryMosaic from './categorymosaic.js'
import Navbar from './navbar.js'
//import About from './components/about.js'


export default class extends React.Component {

    render() {
        return (
            
            <div id={'Home'}>

            <Navbar/>

            <Banner />

            <CategoryMosaic/>
        </div>

        )
    }

}
