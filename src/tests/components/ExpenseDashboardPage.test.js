import React from "react";
import { shallow } from "enzyme";

import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

describe("Render ExpenseDashboardPage", () => {
  it("should render the ExpenseDashboardPage correctly", () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
