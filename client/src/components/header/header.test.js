import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testutils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a string', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.text()).toEqual('Code Development Project');
    });

    

});