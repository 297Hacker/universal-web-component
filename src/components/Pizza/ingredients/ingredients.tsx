import React from 'react';

export interface ingredientProps {
    type: string
}

export const Ingredients: React.FC<ingredientProps> = (props) => {
    let ingredients = {};

    switch (props.type) {
        case('crust'):
            ingredients = <div>Italian Crust</div>;
            break;
        case('sauce'):
            ingredients = <div>Sauce</div>;
            break;
        case('ham'):
            ingredients = <div>Ham</div>;
            break;
        case('cheese'):
            ingredients = <div>Cheese</div>;
            break;
        case('pepperoni'):
            ingredients = <div>Pepperoni</div>;
            break;
        case('mushroom'):
            ingredients = <div>Mushroom</div>;
            break;
        default:
            ingredients = {};
    }
    return <>
        {ingredients}
    </>
};