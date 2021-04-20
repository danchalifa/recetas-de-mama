import React, { Component } from 'react';
import Category from './category.js'
import { Card, Button } from 'react-bootstrap'
import './featuredrecipes.css'
import { useHistory } from "react-router-dom";


import RecipeOne from '../images/featuredRecipes/recipe1.jpg'
import RecipeTwo from '../images/featuredRecipes/recipe2.jpg'
import RecipeThree from '../images/featuredRecipes/recipe3.jpg'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';




export default class extends React.Component {
    
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        const history = useHistory();
        history.push({
            pathname: '/recipe/Enchiladas%20Verdes'
        })
    }

    render() {
        
        if (this.props.english) {
            return (
                <div style={{paddingTop: '150px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px'}}>
                    <p class='headerText' style={{textAlign: 'center'}}>Featured Recipes</p>
                    <div class="card-deck">
                        <div class="card">
                            <img class="card-img-top" src={RecipeOne} alt="Enchiladas"/>
                            <div class="card-block">
                            <h4 class="card-title">Green Enchiladas</h4>
                            <p class="card-text">Classic Swiss Enchiladas with melted mozzarella cheese, sour cream, red onion, and homestyle salsa verde</p>
                            <p class="card-text"><small class="text-muted">Ready in less than one hour</small></p>
                            <Button onClick={this.onSubmit} variant="primary">See Recipe</Button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={RecipeTwo} alt="Tamales"/>
                            <div class="card-block">
                            <h4 class="card-title">Green Tamales</h4>
                            <p class="card-text">Homestyle green Mole tamales. Cobine with refried beans and a homestyle salsa verde.</p>
                            <p class="card-text"><small class="text-muted">4 hours of work but very much worth the effort</small></p>
                            <Button variant="primary">See Recipe</Button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={RecipeThree} alt="ChocoFlan"/>
                            <div class="card-block">
                            <h4 class="card-title">ChocoFlan</h4>
                            <p class="card-text">Two story ChocoFlan. A moist chocolate cake with flan on top. Glazed with caramel and optional nuts</p>
                            <p class="card-text"><small class="text-muted">Legends says some people actually like this...</small></p>
                            <Button variant="primary">See Recipe</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{paddingTop: '150px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px'}}>
                    <p class='headerText' style={{textAlign: 'center'}}>Recetas Destacadas</p>
                    <div class="card-deck">
                        <div class="card">
                            <img class='card-img-top' src={RecipeOne} alt="Card image cap"/>
                            <div class="card-block">
                            <h4 class="card-title">Enchiladas Verdes</h4>
                            <p class="card-text">Enchiladas Suizas con queso gratinado, crema, cebolla morada, y salsa verde casera</p>
                            <p class="card-text"><small class="text-muted">Listas en menos de una hora</small></p>
                            <Button variant="primary">Adelante</Button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={RecipeTwo} />
                            <div class="card-block">
                            <h4 class="card-title">Tamales Verdes</h4>
                            <p class="card-text">Tamales de Mole verde combina perfecto con frijoles refritos y una salsa verde casera.</p>
                            <p class="card-text"><small class="text-muted">4 Horas de trabajo pero valen mucho la pena</small></p>
                            <Button variant="primary">Adelante</Button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={RecipeThree} alt="Card image cap"/>
                            <div class="card-block">
                            <h4 class="card-title">Flan</h4>
                            <p class="card-text">Un Chocoflan de dos pisos. Un pastel de chocolate con flan en sima glazeado con leche quemada.</p>
                            <p class="card-text"><small class="text-muted">Para regalarselo a otra gente</small></p>
                            <Button variant="primary">Adelante</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

