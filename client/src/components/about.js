import React, { Component } from 'react';
import Styles from './about.css'
import BackCover from '../images/back_cover.png'
import BackCoverEnglish from '../images/back_cover_english.png'

export default class extends React.Component {

  constructor(props) {
    super(props); 
    this.english = false;
    }

    render() {
        
    if (this.props.english){
        return (    
            <div id={'About'} class='outerDiv'>

                <div class="imageClass">

                    <p class="title">
                        MOM'S RECIPES:
                        <h1 class="subTitle"> A HISTORY THROUGH FOOD </h1>
                    </p>

                </div>

                <div class='mainDiv'>
                    <div>
                        <p class='headBody'>
                            <br></br>
                            This website is dedicated to the two generations of family recipes that have been passed down through our family.
                            Beginning as word of mouth tradition, progressed into a book, and now a website, the recipes curated on this site are free for all to enjoy.
                            <br></br><br></br>
                        </p>
                    </div>

                    <div>

                        <p className='sectionHeader'>
                            Like You've Always Said: 'Collections Make Kitchens, Not Catarina'
                        </p>
                        
                        <img src={BackCoverEnglish} className='bookImage'/>

                        <p class='body'>
                            Thanks mom for sharing your valuable recipes and especially for teaching me to cook delicious food just like you.
                            In this book, you will find most of your recipes and some from my collection.
                            <br></br><br></br>
                            When I prepare these foods, the aroma transports me to you and I hope that my children feel the same way every time they prepare one of these recipes.
                            <br></br><br></br>
                            Special thank you to my marvelous husband, my Pancho, for his dedication and patience in the preparation of this book. To my precious Patty for trying every one of 
                            these recipes and for giving her opinion. And my adored Danny for designing the book layout.
                            <br></br><br></br>
                            <b>Your daughter,
                            <br></br><br></br>
                            Yoli Ponce de Leon Isunza</b>

                        </p>
                    </div>
                </div>

            </div>

        )
    } else {
        return(
            <div id={'About'} class='outerDiv'>

            <div class="imageClass">

                <p class="title">
                    LAS RECETAS DE MAMA:
                    <h1 class="subTitle"> LA HISTORIA </h1>
                </p>

            </div>

            <div class='mainDiv'>
                <div>
                    <p class='headBody'>
                        <br></br>
                        Este sitio esta dedicado a las dos generaciones de recetas de nuestra familia que an pasado por los años.
                        Lo que empezo como tradiciones, se econtro en un libro, y finalmente en un formato de web. Las recetas almacenadas en este sitio son gratis para que todos disfruten.
                        <br></br><br></br>
                    </p>
                </div>

                <div>

                    <p className='sectionHeader'>
                        Como Dices Tu: 'Recaudo Hace Cocina, No Catarina'
                    </p>

                    <img src={BackCover} className='bookImage'/>

                    <p class='body'>
                        Gracias mami por compartir tus valiosas recetas y sobre todo por eneseñarme a cocinar tan rico como tu.
                        En este libro encontrara muchas de ellas y algunas de mi colleccion.
                        <br></br><br></br>
                        Cuando preparo estas comidas, el aroma me transporta a ti y espero que mis hijos sientan lo mismo cada vez que ellos preparen alguna de estas rectas.
                        <br></br><br></br>
                        Tambien gracies a mi maravilloso marido, mi Pancho, por su dedicacion y paciencia en la preparacion de esto libro. A mi preciosa Patty por probar cada una de 
                        estas recetas y dar su opinion, y a mi adorado Danny por el diseno de la portada.
                        <br></br><br></br>
                        <b>Tu hija,
                        <br></br><br></br>
                        Yoli Ponce de Leon Isunza</b>
                    </p>
                </div>
            </div>

        </div>

        )
    }
}

}
