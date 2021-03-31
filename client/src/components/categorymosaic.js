import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import Category from './category.js' 
import {CardColumns} from 'react-bootstrap'

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    componentDidMount() {
        fetch("http://localhost:9000/testAPI/types")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }


    render() {
        let categories = ["Breakfast","Lunch","Dinner","Dessert","Snacks"]
        // let categories = this.state.apiResponse;

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

