import React from 'react';
import styled from 'styled-components';

type contactInterfaceProps = {
    id?: number
    name: string
    lastName: string
    age: number
    clickAction: any
    removeAction: any
}

const Ul = styled.ul`
    text-align: left;
    margin: 0 0 10px 0;
    padding: 0;
    list-style: none;
`;

const ContactInterface = (props: contactInterfaceProps) => {
    return <>
        <Ul>
            <span>{props.name} | {props.lastName}</span>
            <li>{props.age}</li>
            <li>
                <button onClick={props.clickAction}>+</button>
                <button onClick={props.removeAction}>-</button>
            </li>
        </Ul>
    </>
};

export default ContactInterface;