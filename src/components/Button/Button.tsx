import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

type ButtonProps = {
    addClass?: string
    myClass?: string
    name?: string
    children?: string
    value?: string
    kind?: string[]
    onClick?: any
    onChange?: any
    type?: string
}

const MainButton = styled.button`
  background-color: #82BFE0;
  border-radius: 2px;
  border: none;
  color: #FFF;
  margin: 0 10px;
  padding: 10px 40px;
    &:hover {
        background-color: #000;
        cursor: pointer;
    }
`;

const Span = styled.span`
    display: none;
    
    &.view {
    display: block;
    }
`;

const Button: React.FC<ButtonProps> = (props) => {
    const focusButton:any = useRef(null);

    useEffect(() => {
        console.log('component is being rerendered');
    }, []);

    return <>
            <MainButton ref={focusButton}
                        className={props.myClass}
                        name={props.name}
                        value={props.value}
                        onClick={props.onClick}
                        onChange={props.onChange}>
                {props.children}
            </MainButton>
            <Span className={props.myClass}>view content when button is clicked</Span>
    </>
};

Button.defaultProps = {
    myClass: 'button',
    name: 'button',
    value: 'Click',
    children: 'Click button'
};

export default Button;