import React from "react";
import { shallow } from "enzyme";
import { AboutPage } from "../../components/AboutPage";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AboutPage />);
});

describe("Footer component rendering", () => {
  it("should render Footer correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
