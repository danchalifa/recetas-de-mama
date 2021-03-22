import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
// import 'banner.css'

export default class extends React.Component {

    render() {
        return (
            
            <div id={'bannerimage'}>
                <div style={{ width: '100%', height: '50%', position: 'relative', textAlign: 'center', fontSize:"72px"}}>RECITAS de MAMA</div>   
            </div>

        )
    }

}

