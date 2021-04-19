import React, { Component } from 'react';
import Category from './category.js'
import { CardColumns } from 'react-bootstrap'

export default class extends React.Component {

    render() {
        let categories = ["Enchiladas", "Pastel de Chocolate", "Chorizo"]
        return (
            <div>
                <div style={{ position: 'relative', textAlign: 'center', fontSize: "24px" }}>Featured Recipes</div>
                <CardColumns style={{ position: 'relative', textAlign: 'center', fontSize: "24px" }}>

                    {categories.map(category => (
                        <Category category={category} />
                    ))}
                </CardColumns>
            </div>
        )
    }

}

