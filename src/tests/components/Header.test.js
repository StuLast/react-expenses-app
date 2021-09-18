import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

let startLogout, wrapper;
beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

describe("Header component rendering", () => {
  it("should render Header correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Header UI tests", () => {
  it("should call startLogout on button click", () => {
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();
  });
});
