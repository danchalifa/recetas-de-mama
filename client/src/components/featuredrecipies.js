import React, { Component } from 'react';
import Category from './category.js'
import { CardColumns, Card, Button } from 'react-bootstrap'
import './featuredrecipes.css'

import RecipeOne from '../images/featuredRecipes/recipe1.jpg'
import RecipeTwo from '../images/featuredRecipes/recipe2.jpg'
import RecipeThree from '../images/featuredRecipes/recipe3.jpg'


export default class extends React.Component {
    
    render() {

        console.log(this.props.english)
        let categories = ["Enchiladas", "Pastel de Chocolate", "Chorizo"]
        
        if (this.props.english) {
            return (
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src='../images/featuredRecipes/recipe1.jpg' alt="Card image cap"/>
                        <div class="card-block">
                        <h4 class="card-title">Green Enchiladas</h4>
                        <p class="card-text">Try making these motherfuckers on your day off</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <Button variant="primary">See Recipe</Button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../images/featuredRecipes/recipe2.jpg" />
                        <div class="card-block">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../images/featuredRecipes/recipe3.jpg" alt="Card image cap"/>
                        <div class="card-block">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src='../images/featuredRecipes/recipe1.jpg' alt="Card image cap"/>
                        <div class="card-block">
                        <h4 class="card-title">Enchiladas Verdes</h4>
                        <p class="card-text">Try making these motherfuckers on your day off</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <Button variant="primary">See Recipe</Button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../images/featuredRecipes/recipe2.jpg" />
                        <div class="card-block">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../images/featuredRecipes/recipe3.jpg" alt="Card image cap"/>
                        <div class="card-block">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

