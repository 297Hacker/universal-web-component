import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

configure({adapter: new Adapter()});

describe('<Button/>', () => {
    it("should render the button conent", () => {
        const component = shallow(<Button />);
        expect(component).toMatchSnapshot();
    });
});