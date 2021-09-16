import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpenseSummary';

describe('Expense Summary rendering: ', () => {
  it('should render the expense summary correctly with no expenses', () => {
    const wrapper = shallow(
      <ExpensesSummary />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the expense summary correctly with 1 expense', () => {
    const wrapper = shallow(
      <ExpensesSummary expenseCount={1} expensesTotal={235}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the expense summary correctly with multiple expenses', () => {
    const wrapper = shallow(
      <ExpensesSummary expenseCount={5} expensesTotal={3000}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
})