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

    render() {
        return(
           <div>
                <FeaturedRecipes 
                    english={this.props.english}/>
            </div>
        );
 
    }

}

const FeaturedRecipes = (props)=> {
    const history = useHistory();

    var onSubmit = () => {
        history.push({
            pathname: '/recipe/Enchiladas%20Verdes',
            state: { recipe: {
                "Name": "Enchiladas Verdes",
                "Name_English": "Green Enchiladas",
                "Ingredientes": "Salsa:<br>½ kilo de tomatillo <br>100 gramos de chile serrano<br>2 dientes de ajo<br>2 cucharaditas de consomé de pollo en polvo<br>Se cuecen todos los ingredientes en agua y se licuan.  Tortillas de maíz<br>Queso fresco desmoronado con cebolla picada y desflemada y/o pollo desmenuzado<br>Queso rallado<br>Crema<br>",
                "Direcciones": "En  en  una  olla  con    aceite    caliente    se  agrega  1  cucharada  grande  de  harina  a  dorar  (para  que espese) vacía la salsa y deja que hierva. <br>Las tortillas de maíz se pasan una por una en el  aceite caliente y después por la salsa hirviendo. Se rellena de queso y cebolla picada, o de pollo desmenuzado.<br>Se enrolla la tortilla. Acomódalas en un platón que se pueda meter al horno de microondas.<br>Esparce  con  queso  rallado  y  antes  de  servirlas  mételas  al  horno  de  microondas  a  que  gratine  el queso.  Sírvelo  con  crema  encima  y  por  supuesto  que  los  frijoles  refritos  son  el  acompañarte perfecto para las enchiladas verdes.",
                "Ingredients_English": "Sauce:<br>½ kilo of tomatillo<br>100 grams of serrano pepper<br>2 cloves of garlic<br>2 teaspoons chicken bouillon powder<br>All the ingredients are cooked in water and blended. Corn tortillas<br>Crumbled fresh cheese with chopped and deflected onion and / or shredded chicken<br>Grated cheese<br>Cream<br>",
                "Directions_English": "In a pot with hot oil, add 1 large tablespoon of flour to brown (to make it thick), empty the sauce and let it boil.<br>The corn tortillas are passed one by one in the hot oil and then through the boiling sauce. It is stuffed with cheese and minced onion, or with shredded chicken.<br>The tortilla is rolled up. Arrange them on a plate that can be put into the microwave oven.<br>Sprinkle with grated cheese and before serving put them in the microwave to gratin the cheese. Serve with cream on top and of course the refried beans are the perfect accompaniment to green enchiladas.",
                "Prep_Time": "10",
                "Cook_Time": "10",
                "CatID": 907,
                "cols": 1
                } 
            }
        })
    }

    var onSubmitTwo = () => {
        history.push({
            pathname: 'recipe/Tamales',
            state: { recipe: {
                    "Name": "Tamales",
                    "Name_English": "Tamales",
                    "Ingredientes": "Masa:<br>2 Kg de masa no muy molida<br>½ kg de manteca de puerco<br>Sal<br>2 cucharadas de polvo de hornear<br>Caldo de puerco o de pollo el necesario para amasar.<br>",
                    "Direcciones": "Masa con Maseca:<br>1 kg de Maseca (harina preparada para tamales)<br>¾ kg. Manteca de puerco<br>Sal<br>2 cucharadas de polvo para hornear<br>Caldo de puerco o pollo el necesario<br> <br>Bate  la  manteca  con  la  batidora  eléctrica  a  que  quede  suave. A  mano  amasa  la  manteca  con  la<br><br>Maseca,  sal  y  polvo  de  hornear  alternando  con  caldo  (tibio),  hasta  que  tenga  la  consistencia deseada. Para probar si la masa ya está lista, toma media cucharita de la masa y sumérgela en un vaso con agua fría, si flota es que ya está lista, si no, pues sigue amasando hasta que quede en su punto.<br> <br>Hojas para tamal (las hojas se limpian y se dejan remojar toda la noche) antes de usarla sácala del agua y sécala con una toalla de papel y lista para untarle la masa. Acomoda la hoja sobre la planta de tu mano, con la otra mano úntale la masa con una cuchara o con tus propios dedos a forma de que la hoja quede cubierta a lo ancho, la parte angosta de la hoja se deja sin masa.<br>Rellena a lo largo de la hoja con el mole de tu gusto y ciérralo a que quede un bultito, la parte de la hoja sin masa se dobla.<br>Se ponen a cocer en una vaporeara a fuego lento.<br> <br>Después de hervir deja que se cueza al vapor por 1 hora, y saca un tamal, si se pega la masa en la hoja déjala ½ hora más. ",
                    "Ingredients_English": "Dough:<br>2 Kg of dough not very ground<br>½ kg of lard<br>Salt<br>2 tablespoons of baking powder<br>Pork or chicken broth the necessary to knead.<br><br>Dough with Maseca:<br>1 kg of Maseca (flour prepared for tamales)<br>¾ kg. Lard<br>Salt<br>2 tablespoons of baking powder<br>Pork or chicken broth as necessary",
                    "Directions_English": " Beat the butter with the electric mixer until smooth. By hand knead the butter with the<br><br>Maseca, salt and baking powder alternating with broth (warm), until it has the desired consistency. To test if the dough is ready, take half a teaspoon of the dough and immerse it in a glass with cold water, if it floats, it is ready, if not, then continue kneading until it is ready.<br> <br>Tamale leaves (the leaves are cleaned and soaked overnight) before use remove it from the water and dry it with a paper towel and ready to spread the dough. Arrange the leaf on the plant of your hand, with the other hand spread the dough with a spoon or with your own fingers so that the leaf is covered across the width, the narrow part of the leaf is left without dough.<br>Fill the length of the leaf with the mole of your choice and close it to make a lump, the part of the leaf without dough is folded.<br>They are put to cook in a steamer over low heat.<br> <br>After boiling, let it steam for 1 hour, and take out a tamale. If the dough sticks to the sheet, leave it for another ½ hour.",
                    "Prep_Time": "10",
                    "Cook_Time": "10",
                    "CatID": 907,
                    "cols": 1
                    } 
            }
        })
    }

    var onSubmitThree = () => {
        history.push({
            pathname: '/recipe/Flan%20de%20Almendras',
            state: { recipe: {
                "Name": "Flan de Almendras",
                "Name_English": "Almond Flan",
                "Ingredientes": "1 taza de azúcar <br>1 lata de leche condensada<br>¼ taza de leche<br>125 gramos de almendras peladas y tostadas<br>4 huevos<br>½ cucharadita de vainilla<br>",
                "Direcciones": "Derrite la azúcar a fuego lento en una olla, ya que está hecha caramelo viértelo al molde, esparce el caramelo por las paredes del molde.<br>En la batidora o licuadora puedes batir las leches, los huevos y las almendras. Viértelo al molde con caramelo y hornéalo a baño maría por 1 hora a 350 grados F.",
                "Ingredients_English": "1 cup of sugar<br>1 can of condensed milk<br>¼ cup milk<br>125 grams of peeled and toasted almonds<br>4 eggs<br>½ teaspoon vanilla<br>",
                "Directions_English": "Melt the sugar over low heat in a pot, since it is made caramel, pour it into the mold, spread the caramel on the walls of the mold.<br>In the blender or blender you can beat the milk, eggs and almonds. Pour it into the mold with caramel and bake in a double boiler for 1 hour at 350 degrees F.",
                "Prep_Time": "10",
                "Cook_Time": "10",
                "CatID": 914,
                "cols": 1
                }
            }
        })
    }
    
  
    if (props.english) {
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
                        <Button onClick={onSubmit} variant="primary">See Recipe</Button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={RecipeTwo} alt="Tamales"/>
                        <div class="card-block">
                        <h4 class="card-title">Green Tamales</h4>
                        <p class="card-text">Homestyle green Mole tamales. Cobine with refried beans and a homestyle salsa verde.</p>
                        <p class="card-text"><small class="text-muted">4 hours of work but very much worth the effort</small></p>
                        <Button onClick={onSubmitTwo} variant="primary">See Recipe</Button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={RecipeThree} alt="ChocoFlan"/>
                        <div class="card-block">
                        <h4 class="card-title">ChocoFlan</h4>
                        <p class="card-text">Two story ChocoFlan. A moist chocolate cake with flan on top. Glazed with caramel and optional nuts</p>
                        <p class="card-text"><small class="text-muted">Legends says some people actually like this...</small></p>
                        <Button onClick={onSubmitThree} variant="primary">See Recipe</Button>
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
                        <Button onClick={onSubmit} variant="primary">Adelante</Button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={RecipeTwo} />
                        <div class="card-block">
                        <h4 class="card-title">Tamales Verdes</h4>
                        <p class="card-text">Tamales de Mole verde combina perfecto con frijoles refritos y una salsa verde casera.</p>
                        <p class="card-text"><small class="text-muted">4 Horas de trabajo pero valen mucho la pena</small></p>
                        <Button onClick={onSubmitTwo} variant="primary">Adelante</Button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={RecipeThree} alt="Card image cap"/>
                        <div class="card-block">
                        <h4 class="card-title">Flan</h4>
                        <p class="card-text">Un Chocoflan de dos pisos. Un pastel de chocolate con flan en sima glazeado con leche quemada.</p>
                        <p class="card-text"><small class="text-muted">Para regalarselo a otra gente</small></p>
                        <Button onClick={onSubmitThree} variant="primary">Adelante</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  }

  