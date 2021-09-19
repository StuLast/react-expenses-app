import React from "react";
import { shallow } from "enzyme";
import { CookiesPage } from "../../components/CookiesPage";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<CookiesPage />);
});

describe("Footer component rendering", () => {
  it("should render Footer correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
