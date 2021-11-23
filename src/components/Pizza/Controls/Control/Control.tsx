import React from 'react';
import styled from 'styled-components';

type ControlProps = {
    label?: string
    added: any
    remove: any
};

const ControlWrapper = styled.div`
    float: left;
    margin: 10px 0px;
    width: 100%;
    
    span {
        margin-right: 20px;
    }
`;

const Button = styled.button`
    background-color: #237c7e;
    border: none;
    border-radius: 3px;
    color: #FFF;
    height: 30px;
    width: 30px;
    
        &:hover {
            cursor: pointer;
        }
`;

const RedButton = styled(Button)`
    background-color: #d0245a;
`;

const control: React.FC<ControlProps> = (props) => {
    return <ControlWrapper>
        <span>{props.label}</span>
        <React.Fragment>
        <Button onClick={props.added}>+</Button>
        <RedButton onClick={props.remove}>-</RedButton>
        </React.Fragment>
    </ControlWrapper>
};

export default control;