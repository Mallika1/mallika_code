import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils/testutils";
import ThumbnailsView from "./index";

const setUp = (props={}) => {
    const component = shallow(<ThumbnailsView {...props} />);
    return component;
};

describe("ThumbnailsView Component", () => {
    describe("Have props", () => {
        let wrapper;
        beforeEach(() => {
            const props ={
                thumbnail: "Test Thumbnail",
                id: "Test ID",
                width:"200",
                height: "200",
                onClick:"Test Click"
            };
            wrapper = setUp(props);
        });

        it("Should render without errors", () => {
            const component = findByTestAtrr(wrapper, "thumbnailViewComponent");
            expect(component.length).toBe(1);
        });

        it("Should render a <img>", () => {
            const h1 = findByTestAtrr(wrapper, "thumbnailViewComponent");
            expect(h1.length).toBe(1);
        });  
    });

    describe("Have NO props", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it("Should not render", () => {
            const component = findByTestAtrr(wrapper, "thumbnailViewComponent");
            expect(component.length).toBe(0);
        });
    });

});