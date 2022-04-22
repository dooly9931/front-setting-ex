import React from "react";
import { shallow } from "enzyme";
import MainWord from "./[word]";

import { getPage } from "next-page-tester";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Router from "next/router";

describe("Main", () => {
  it("should render home page correctly", async () => {
    // server side testing
    const { render } = await getPage({ route: "/main/test" });
    render();

    await waitFor(() => {
      expect(screen.getByText("Main page")).toBeInTheDocument();
      expect(screen.getByText('URL argument: "test"')).toBeInTheDocument();
      expect(screen.getByText('URL argument - backend response: "testtesttest"')).toBeInTheDocument();
    });
    // fireEvent(screen.getByText("home page"), new MouseEvent("click"));
  });

  it("should handle home page click", async () => {
    // client side testing
    const spyRouterPush = jest
      .spyOn(Router, "push")
      .mockImplementation((url) => new Promise((resolve, reject) => true));
    const component = shallow(<MainWord word="test2" word3="test2test2test2" randomHex="0x0000" />);
    const buttonWrapper = component.find("button");
    buttonWrapper.at(1).simulate("click");
    expect(spyRouterPush).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith("/");
    expect(component).toMatchSnapshot();
  });
});
