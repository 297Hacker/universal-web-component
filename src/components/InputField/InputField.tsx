import React, {useState} from 'react';
import styled from 'styled-components';

type InputFieldType = {
    name: string
    type: string
    input?: string
    placeholder?: string
    maxValue: number
    value?: string
}

const Input = styled.input`
    border: 1px solid #eee;
    border-radius: 3px;
    font-size: 16px;
    margin: 10px 10px 10px 0;
    padding: 10px 5px;
    outline: none;
    width: 250px;
`;

const InputField: React.FC<InputFieldType> = (props) => {
    const [input, setInput] = useState();
    const lengthMax: number = props.maxValue;
    const lengthWarning: number = 15;
    let warningText: {} = "";

    const handleChange = (e: any) => {
        setInput(e.target.value);
        if (e.target.value.length > lengthWarning && e.target.value.length <= lengthMax) {
            console.log('length check');
            warningText = <span>max text length is almost reached</span>;
        } else {
            console.log('warning check');
            warningText = <span> </span>;
        }
    };

    const handleBlur = () => {
    };

    return <>
        <Input maxLength={props.maxValue} name={props.name} value={input}
               type={props.type} placeholder={props.placeholder}
               onChange={e => handleChange(e)} onBlur={() => handleBlur()}
        />
        {warningText}
    </>;
};

InputField.defaultProps = {
    name: 'input name',
    type: 'name',
    maxValue: 20,
    placeholder: 'Name'
};

export default InputField;
