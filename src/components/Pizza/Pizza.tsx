import React from 'react';
import styled from 'styled-components';
import {Ingredients} from './ingredients/ingredients';

const PizzaContent = styled.section`
    float:left;
    text-align: center;
    width: 250px;
`;

const pizza = (props: any) => {
    let transIngredients: any = Object.keys(props.ingredients)
        .map(i => {
            return [...Array(props.ingredients[i])].map((_, x) => {
                return <Ingredients key={i + x} type={i}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transIngredients.length === 0) {
        transIngredients = <p>Please add some ingredients</p>
    }
    return <PizzaContent>
        <Ingredients type="crust"/>
        <Ingredients type="sauce"/>
        {transIngredients}
    </PizzaContent>
};

export default pizza;