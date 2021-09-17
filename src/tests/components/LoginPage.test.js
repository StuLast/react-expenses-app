import React from "react";
import { shallow } from "enzyme";

import { LoginPage } from "../../components/LoginPage";

describe("Render Login Page:", () => {
  it("should render the login page correctly", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
