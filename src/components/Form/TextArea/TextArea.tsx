import React from 'react';
import styled from 'styled-components';

type textAreaProps = {
    totalRows: number
    children: number & string
}

const TextAreaContent = styled.textarea`
    height: 100px;
    border: 1px solid #eee;
    border-radius: 3px;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px 5px;
    outline: none;
    resize: none;
    width: 250px;
`;

const TextArea: React.FC<textAreaProps> = (props) => {
    return <React.Fragment>
        <TextAreaContent rows={props.totalRows}>{props.children}</TextAreaContent>
    </React.Fragment>;
};

export default TextArea;
