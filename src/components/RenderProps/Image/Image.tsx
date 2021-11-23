import React from 'react';
import styled from "styled-components";

export type trackerType = {
    x?: number
    y?: number
}

type imageProp = {
    tracker: trackerType
    image?: any
}

const ImageWrapper = styled.img`
    position: absolute;
    height: 50px;
    width: 50px;
`;

const Image: React.FC<imageProp> = (props) => {
    const {tracker} = props;
    return <><ImageWrapper src={props.image} style={{left: tracker.x, top: tracker.y}}/></>
};

Image.defaultProps = {
    image: "/src/images/cat.png"
};

export default Image;
