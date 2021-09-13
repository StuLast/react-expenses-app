import React from 'react'
import { shallow } from 'enzyme';

import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";


describe("Render ExpenseList component", () => {
  it("should render ExpenseList with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
  });

  it("should render ExpenseList with no expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
  });
});

