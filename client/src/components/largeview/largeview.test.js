/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    Test file for LargeImageView component.

    File   : src/largeview/largeview.test.js
    Component : LargeImageView 

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils/testutils";
import LargeImageView from "./index";

const setUp = (props={}) => {
    const component = shallow(<LargeImageView {...props} />);
    return component;
};

describe("LargeImageView Component", () => {
    describe("Have props", () => {
        let wrapper;
        beforeEach(() => {
            const props ={
                image: "Test",
                altText: "Test Alt Text",
                width:"200",
                height: "200"
            };
            wrapper = setUp(props);
        });

        it("Should render without errors", () => {
            const component = findByTestAtrr(wrapper, "largeViewComponent");
            expect(component.length).toBe(1);
        });

        it("Should render a <img>", () => {
            const h1 = findByTestAtrr(wrapper, "largeViewComponent");
            expect(h1.length).toBe(1);
        });  
    });

    describe("Have NO props", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it("Should not render", () => {
            const component = findByTestAtrr(wrapper, "largeViewComponent");
            expect(component.length).toBe(0);
        });
    });

});