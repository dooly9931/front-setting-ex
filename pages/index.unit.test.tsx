import React from "react";
import { shallow } from "enzyme";
import Home from "../pages/index";
import Router from "next/router";

describe("Home", () => {
  it("should render home page correctly", () => {
    const spyRouterPush = jest
      .spyOn(Router, "push")
      .mockImplementation((url) => new Promise((resolve, reject) => true));
    const component = shallow(<Home />);
    const containerWrapper = component.find(".container");
    expect(containerWrapper.length).toBe(1);
    const buttonWrapper = component.find("button");
    buttonWrapper.simulate("click");
    expect(spyRouterPush).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith("/main/word");
    expect(component).toMatchSnapshot();
  });
});
