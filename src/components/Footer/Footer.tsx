import React from 'react';
import styled from 'styled-components';

type footerProps = {
    header?: string,
}

const FooterContent = styled.footer`
    float: left;
    font-family: 'Roboto', sans-serif;
    margin: 100px 0 0;
    width: 100%;
    
    h4 {
        color: #000;
        font-size: 12px;
        margin: 0;
        padding: 0;
    }
    span {
        color: #d0245a;
        font-size: 14px; 
        font-variant-caps: all-small-caps;
    }    
`;

const Footer: React.FC<footerProps> = (props) => {
    return <FooterContent className="footer">
        <h4>{props.header}</h4>
        <span>{props.children}</span>
    </FooterContent>
};

Footer.defaultProps = {
    header: 'this is an experimental environment for creating web components'
};

export default Footer;