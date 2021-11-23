import React from 'react';
import styled, {keyframes} from 'styled-components';

type LogoProps = {
    logo?: string,
    alt?: string;
    path?: string
}

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

const Image = styled.img`
    animation: ${rotate} 5s linear infinite 1s;
    width: 125px;
`;

const Logo: React.FC<LogoProps> = (props) => {
    return <a href={props.path}> <Image src={props.logo} alt={props.alt}>
    </Image></a>
};

Logo.defaultProps ={
    logo: '/src/images/frmwrk_logo.svg',
    alt: 'logo',
    path: '/'
};

export default Logo;