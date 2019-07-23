/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    Test file for Footer component.

    File   : src/footer/footer.test.js
    Component : Footer 

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils/testutils";
import Footer from "./index";

const setUp = (props={}) => {
    const component = shallow(<Footer {...props} />);
    return component;
};
describe("Footer Component", () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it("Should render without errors", () => {
        const wrapper = findByTestAtrr(component, "footerComponent");
        expect(wrapper.length).toBe(1);
    });

    it("Should render a string", () => {
        const wrapper = findByTestAtrr(component, "footerComponent");
        expect(wrapper.text()).toEqual("Download PDF Instructions");
    });
});