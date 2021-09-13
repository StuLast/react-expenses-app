import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn()}
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
});

describe('AddExpensePage Rendering: ', () => {
  it('should render the AddExpense page correctly', () =>{
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AddExpensePage UI Testing: ', () => {
  
  it('should handle onSubmit', ()=> {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(wrapper).toMatchSnapshot();
  });

});