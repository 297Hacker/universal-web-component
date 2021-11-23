import React from 'react';
import {shallow} from 'enzyme';
import ContactForm from '../components/Form/Contact/ContactForm';
import InputField from '../components/InputField/InputField';
import TextArea from '../components/Form/TextArea/TextArea';
import Button from '../components/Button/Button';

describe('<ContactForm/>', () => {
    it("Contact form has two inputfield,with a Textare and a button", () => {
        const component = shallow(<ContactForm/>);
        expect(component.find(InputField)).toHaveLength(2);
        expect(component.find(TextArea)).toHaveLength(1);
        expect(component.find(Button)).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });
});

