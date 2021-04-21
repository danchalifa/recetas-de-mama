import React from 'react';
import Banner from '../images/BannerV2.png'; // Tell webpack this JS file uses this imag
import './banner.css'


export default class extends React.Component {

    render() {
        return (
            
        <div>
            <img src={Banner} alt="Banner Mast Head" className="center"/>
 
        </div>
            



        )
    }

}

