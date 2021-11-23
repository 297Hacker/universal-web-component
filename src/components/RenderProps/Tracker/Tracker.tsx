import React, {useState} from 'react';
import styled from 'styled-components';
import {trackerType} from '../Image/Image';

type trackerProps = {
    children: (state: trackerType) => {}
}

const TrackerWrapper = styled.section`
    height: 350px;
    margin: 0;
    left: 0;
    padding: 0;
    position: relative;
    top: 0;
    width: calc(100vw - 50px);
`;

const Tracker: React.FC<trackerProps & trackerType> = (props:trackerProps) => {
    const [state, updateState] = useState({x: 0, y: 0});

    let handleMouseMove = (e: any) => {
        updateState({
            x: e.clientX,
            y: e.clientY
        })
    };

    return <TrackerWrapper onMouseMove={handleMouseMove}>
        {props.children(state)}
    </TrackerWrapper>
};

export default Tracker;
