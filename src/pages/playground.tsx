import React, {useState} from 'react';
import Layout from '../components/Layout/Layout';
import Pizza from '../components/Pizza/Pizza';
import Controls from "../components/Pizza/Controls/Controls";

const Playground:React.FC = () => {
    let [ingredientState, updateIngredient] = useState({
      ingredients: {
          crust:0,
          sauce:0,
          ham: 0,
          cheese: 0,
          pepperoni: 0,
          mushroom: 0
      }
    });
   let addIngredientHandler = (type: {}) => {
        const oldCount = ingredientState.ingredients[type.key];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredientState.ingredients
        };
        updatedIngredients[type] = updatedCount;
    };

    let removeIngredientHandler = (type) => {
        const oldCount = ingredientState.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredientState.ingredients
        };
        updatedIngredients[type] = updatedCount;
    };

    return (
        <Layout page="Playground">
            <Controls ingredientAdded={addIngredientHandler} ingredientRemove={removeIngredientHandler}/>
            <Pizza ingredients={ingredientState.ingredients}/>
        </Layout>
    )
};

export default Playground;