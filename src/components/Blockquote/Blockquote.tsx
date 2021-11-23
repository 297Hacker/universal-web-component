import React from 'react';
import styled from 'styled-components';

type blockQuoteProps = {
    color?: any
    content?: string
    children?: string
}

const BlockquoteContent = styled.blockquote`
    color: ${props => props.color};
    font-size: 42px;
    font-style: italic;
    line-height: 42px;
    margin: 10px auto;
    text-align: center;
    width: calc(100% - 40px);
    &:after {
        content: '"';
    }
    &:before {
        content: '"';
    }
`;

const Blockquote = (props: blockQuoteProps) => {
    let curContent;
        if (props.children) {
            curContent = <>{props.children}</>;
        } else {
            curContent = <>{props.content}</>;
        }
    return <BlockquoteContent color={props.color}>{curContent}</BlockquoteContent>
};

Blockquote.defaultProps = {
    color: "#000",
    content: "Blockquote content"
};

export default Blockquote;
