import React from "react";
import { shallow } from "enzyme";
import { Footer } from "../../components/Footer";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe("Footer component rendering", () => {
  it("should render Footer correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
