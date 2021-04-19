import React, { Component } from 'react';
import Category from './category.js'
import { CardColumns, Card, Button } from 'react-bootstrap'
import './featuredrecipes.css'

import '../images/featuredRecipes/recipe1.jpg'
import '../images/featuredRecipes/recipe2.jpg'
import '../images/featuredRecipes/recipe3.jpg'

export default class extends React.Component {

    render() {
        let categories = ["Enchiladas", "Pastel de Chocolate", "Chorizo"]
        return (
            <div>
                <div style={{ position: 'relative', textAlign: 'center', fontSize: "24px" }}>
                    Featured Recipes
                </div>
                
                <CardColumns style={{ position: 'relative', textAlign: 'center', fontSize: "24px" }}>

                    {categories.map(category => (
                        <Category category={category} />
                    ))}
                </CardColumns>

                <Card style={{ width: '18rem' }}>

  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

            </div>
        )
    }

}

