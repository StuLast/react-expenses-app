import React from "react";
import { shallow } from "enzyme";
import { PrivacyPage } from "../../components/PrivacyPage";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<PrivacyPage />);
});

describe("Footer component rendering", () => {
  it("should render Footer correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
