import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('ExpenseForm rendering:', ()=> {
  
  it('should render ExpenseForm correctly without data.', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
  });

  it('should render ExpenseForm correctly with expense data.', () => {
    const expense = expenses[1];
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
  })
});

describe('ExpenseForm user interaction:', () => {
  
  it('should render error for invalid form submission', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault : () => {}} );
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
      target: 
      {
        value 
      }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set note on input change', () => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
      target: 
      {
        value
      }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set amount when correct amount value is provided', () => {
    const value = "100.12";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
      target: {
        value
      }
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not set amount when incorrect amount value is provided', () => {
    const value = "100.123";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
      target: {
        value
      }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
  })
});

describe('Expense Form function prop calls', () => {
  
  it('should be called with args', () => {
    const onSubmitSpy = jest.fn();
    console.log('Expenses object to be passed in', expenses[2]);
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
      {
        description: expenses[2].description,
        amount: expenses[2].amount,
        note: expenses[2].note,
        createdAt: expenses[2].createdAt
      });
    expect(wrapper).toMatchSnapshot();
  });
  
});

