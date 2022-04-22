import React from "react";
import { shallow } from "enzyme";
import Main from "./index";

describe("Home", () => {
  it("should render home page correctly", () => {
    // const component = shallow(<Main />);
    // const containerWrapper = component.find("#main-page");
    // expect(containerWrapper.length).toBe(1);
    // expect(component).toMatchSnapshot();
    const component = shallow(<Main staticString="TEST_STRING" />);
    const containerWrapper = component.find("#static-string");
    expect(containerWrapper.at(0).text()).toBe('Static Page text: "TEST_STRING"');
  });
});
