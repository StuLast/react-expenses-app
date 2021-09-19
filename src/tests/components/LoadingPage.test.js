import React from "react";
import { shallow } from "enzyme";

import { LoadingPage } from "../../components/LoadingPage";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<LoadingPage />);
});

describe("Render Loading Page:", () => {
  it("should render the Loading page correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
