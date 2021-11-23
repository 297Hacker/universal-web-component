import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../components/Menu/Menu';
import Link from 'next/link';

configure({adapter: new Adapter()});

describe('<Menu/>', () => {
    it("menu has two link component", () => {
        const component = shallow(<Menu />);
        expect(component.find(Link)).toHaveLength(2);
        expect(component).toMatchSnapshot();
    });
});