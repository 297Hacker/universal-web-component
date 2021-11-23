import React from 'react';
import styled from 'styled-components';

type figureProps = {
    imgSource?: string
    caption?: string
    type: string
}

const Fig = styled.figure`
    border-radius: 3px;
    float:left;
    margin: 10px;
    width: 250px;
    img {
        border-radius: 3px;
        width: 100%;
    },
    figcaption {
        font-size: 12px;
        text-align:center;
    }
`;

const MedFig = styled(Fig)`
    width: 400px
`;

const LargeFig = styled(Fig)`
        width: 600px;
`;

const XlargeFig = styled(Fig)`
        width: 800px;
`;

const Figure: React.FC<figureProps> = (props) => {
    let cusFigure = {};

    switch (props.type) {
        case('medium'): {
            cusFigure = <MedFig>{props.caption} | medium</MedFig>;
        }
            break;
        case('large'): {
            cusFigure = <LargeFig>{props.caption} | large</LargeFig>;
        }
            break;
        case('x-large'): {
            cusFigure = <XlargeFig>{props.caption} | x-large</XlargeFig>;
        }
            break;
        default:
            cusFigure = {};
    }

    return <>{cusFigure}</>
};

Figure.defaultProps = {
    imgSource: '/src/images/image.jpg',
    caption: 'please insert caption or remove it by adding blocked'
};


export default Figure;