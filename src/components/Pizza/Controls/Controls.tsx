import React from 'react';
import styled from 'styled-components';
import Control from './Control/Control'

type ControlsProps = {
    ingredientAdded: any
    ingredientRemove: any
};

type conProps = {
    label: string
    type: string
}

const ControlsContent = styled.section`
    float: left;
`;

const con = [
    {label: 'Cheese', type: 'cheese'},
    {label: 'Ham', type: 'ham'},
    {label: 'Mushroom', type: 'mushroom'},
    {label: 'Pepperoni', type: 'pepperoni'}
];

const Controls: React.FC<ControlsProps> = (props) => {
    return <ControlsContent>
        {con.map((x: conProps) => (
            <Control key={x.label} label={x.label} added={() => props.ingredientAdded(x.type)} remove={() => props.ingredientRemove(x.type)}/>
        ))}

    </ControlsContent>
};

export default Controls;