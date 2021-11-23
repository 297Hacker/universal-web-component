import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Figure from "../components/Figure/Figure";
import InputField from "../components/InputField/InputField";
import Contact from "../components/Contact/Contact";
import Countries from "../components/Countries/Countries";
import {MouseTracker} from "../components/RenderProps/MouseTracker";
import Tracker from "../components/RenderProps/Tracker/Tracker";
import Display from "../components/RenderProps/Display/Display";

const Div = styled.section`
    float: left;
    height: 100%;
    min-height: 250px;
    position: relative;
    width: 100%;
`;


const Components = () => {
    const data = [
        {
            id: 1,
            name: "Aruba",
            currency: "FL"
        },
        {
            id: 2,
            name: "Brazil",
            currency: "BRL"
        },
        {
            id: 3,
            name: "England",
            currency: "POUND"
        },
        {
            id: 4,
            name: "Japan",
            currency: "YEN"
        }
    ];
    return (
        <Layout page="Components">
            <Div>
                <Figure type="large" caption="Large"/>
                <Figure type="medium"/>
                <Figure type="x-large"/>
            </Div>
            <Div>
                <InputField name="test" type="name" maxValue={25}/>
            </Div>
            <Div>
                <Contact/>
            </Div>
            <Div>
                <Countries children={data}/>
            </Div>
            <Div>
                {/*<Increment/>*/}
            </Div>
            <Div>
                <MouseTracker/>
            </Div>
            <Div>
                <Tracker>{t => <Display displayTrack={t}/>}</Tracker>
            </Div>
        </Layout>
    )
};

export default Components;