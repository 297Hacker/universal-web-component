import React from 'react';
import Head from 'next/head'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import styled from 'styled-components';

const HeaderContent = styled.header`
    font-family: 'Roboto', sans-serif;
    font-variant-caps: all-small-caps; 
    height: 100px;
    margin: 0;
    padding-top: 25px;
    width: 100%;
     
     span {
        margin-left: 20px;
    } 
`;

type HeaderProps = {
    title?: string,
}

const Header: React.FC<HeaderProps> = (props) => {
    return <React.Fragment>
        <Head>
            <title>{props.title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <HeaderContent>
            <Logo/>
            <span>{props.children}</span>
            <Menu/>
        </HeaderContent>
    </React.Fragment>
};

export default Header;