import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testutils';
import ImageAttributeView from './index';

const setUp = (props={}) => {
    const component = shallow(<ImageAttributeView {...props} />);
    return component;
};

describe('ImageAttributeView Component', () => {
describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
        const props ={
            title: 'Test',
            description: 'Test Desc',
            cost:'Test Cost',
            id: 'Test id',
            thumbnail: 'Test Thumbnail',
            image: 'Test image'
        };
        wrapper = setUp(props);
    });

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'attrViewComponent');
        expect(component.length).toBe(1);
    });

    // it('Should render a H1', () => {
    //     const h1 = findByTestAtrr(wrapper, 'header');
    //     expect(h1.length).toBe(1);
    // });

    // it('Should render a desc', () => {
    //     const desc = findByTestAtrr(wrapper, 'desc');
    //     expect(desc.length).toBe(1);
    // });

});

describe('Have NO props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should not render', () => {
        const component = findByTestAtrr(wrapper, 'attrViewComponent');
        expect(component.length).toBe(0);
    });


});


});