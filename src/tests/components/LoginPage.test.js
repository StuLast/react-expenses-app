import React from "react";
import { shallow } from "enzyme";

import { LoginPage } from "../../components/LoginPage";

let startLogin, wrapper;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

describe("Render Login Page:", () => {
  it("should render the login page correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Login UI tests", () => {
  it("should call startLogin on button click", () => {
    wrapper.find("button").simulate("click");
    expect(startLogin).toHaveBeenCalled();
  });
});
