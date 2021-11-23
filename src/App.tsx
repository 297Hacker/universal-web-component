import React from 'react';
import styled from 'styled-components';
import './pages/pages.scss'

const Div = styled.div`
    a, input, span {
        font-family: arial, sans-serif;
    }
`;

const App: React.FC = () => {
    return <Div className="App">
    </Div>
};

export default App;
