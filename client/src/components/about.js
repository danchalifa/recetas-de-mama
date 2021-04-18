import React, { Component } from 'react';
import Styles from './about.css'
import BackCover from '../images/back_cover.png'

export default class extends React.Component {

    render() {
        return (
            
            <div id={'About'}>

                <div class="imageClass">

                    <p class="title">
                        LAS RECETAS DE MAMA:
                        <h1 class="subTitle"> LA HISTORIA </h1>
                    </p>

                </div>

                <div>
                    <p class='headBody'>
                        <br></br>
                        filler text to put on here here is even more text to put on here so that It looks like there is text
                        <br></br>
                        adding even mroe content to make it look like there is content. Even more filler text to make it look like there is more writing here than there really
                        <br></br>
                        and lastly one more line of text to really make it look like there is more here than there is
                        <br></br><br></br>
                    </p>
                </div>

                <img src={BackCover} className='bookImage'/>

                <div>

                    <p className='sectionHeader'>
                        Como Dices Tu: 'Recaudo Hace Cocina, No Catarina'
                    </p>

                    <p class='body'>
                        Gracias mami por compartir tus valiosas recetas y sobre todo por enesenarme a cocinar tan rico como tu.
                        En este libro encontrara muchas de ellas y algunas de mi colleccion
                        <br></br><br></br>
                        Cuando preparo estas comidas, el aroma me transporta a ti y espero que mis hijos sientan lo mismo cada vez que ellos preparen alguna de estas rectas.
                        <br></br><br></br>
                        Tambien gracies a mi maravillos y Ch.P.T marido, mi Pancho, por su dedicacion y paciencie en la preparacion de esto libro. A mi preciosas Patty por probar cada una de 
                        estas recetas y dar su opinion, y a mi adorado Danny por el diseno de la portada.
                        <br></br><br></br>
                        <b>Tu hija,
                        <br></br><br></br>
                        Yoli Ponce de Leon Isunza</b>
                    </p>
                </div>

            </div>

        )
    }

}
