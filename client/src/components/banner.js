import React, { Component } from 'react';
import Banner from '../images/BannerV2.png'; // Tell webpack this JS file uses this image
import center from './banner.css'

export default class extends React.Component {

    render() {
        return (
            
        <div>
            <img src={Banner} alt="My_Logo" className="center"/>
 
        </div>
            



        )
    }

}

