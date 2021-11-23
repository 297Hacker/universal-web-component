import React from 'react';
import Layout from '../components/Layout/Layout';
import Blockquote from "../components/Blockquote/Blockquote";

const Index: React.FC = () => {
    return (
        <Layout page="Home">
            <h2>This is a project provided from FRMWRK and the goal is to build universal web components.</h2>
            <p>Environment consist of React, Typescript, Next.js and styled-components</p>
            <Blockquote color="#d0245a">Customizing my own component block quote</Blockquote>
        </Layout>
    )
};
export default Index;
