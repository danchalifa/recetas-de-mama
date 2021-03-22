import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import Category from './category.js' 
import {CardColumns} from 'react-bootstrap'

export default class extends React.Component {

    render() {
        let categories = ["Breakfast","Lunch","Dinner","Dessert","Snacks"]
        return (
            <div>
                <div style={{ position: 'relative', textAlign: 'center', fontSize: "24px" }}>Categories</div>                  


                <CardColumns style={{ position: 'relative', textAlign: 'center', fontSize: "24px" }}>

                    {categories.map(category => (
                        <Category category={category} />
                    ))}
                </CardColumns>

                
            </div>
        )
    }

}
