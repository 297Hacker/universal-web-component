import * as React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styled from 'styled-components';

type LayoutProps = {
    page: string;
}

const Main = styled.main`
    margin: 5px 10px;
    width: calc(100% - 20px);
    
    button {
        outline: none;
    }
`;

const Layout: React.FC<LayoutProps> = (props) => (
    <Main className={props.page}>
        <Header title="My universal web component app">Universal web component</Header>
        {/*content*/}
        {props.children}
        <Footer>FRMWRK | 2020</Footer>
    </Main>
);

export default Layout