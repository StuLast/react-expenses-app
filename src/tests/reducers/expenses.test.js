import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSE } from "../actions/types";

describe('Reducer Setup', () => {

  it('should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
  });

});

describe('Adding expenses', () => {

  it('should add an expense', () => {
    const expense = {
      id: '109',
      description: "Mortgage",
      note: '',
      amount: 479500,
      createdAt: 20000
    }
    const action = { type: ADD_EXPENSE, expense }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
  });

});

describe("Editing Expenses", () => {

  it('should edit an expense', () => {
    const updates = { description: "Vehicle Rental", }
    const action = { type: EDIT_EXPENSE, id: expenses[1].id, updates };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updates.description);
  });

  it('should not edit an expense if expense not found', () => {
    const updates = { description: "Vehicle Rental", }
    const action = { type: EDIT_EXPENSE, id: -1, updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});

describe("Remove Expenses", () => {

  it('should remove expense by ID', () => {
    const action = {
      type: REMOVE_EXPENSE,
      id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2], expenses[3], expenses[4]]);
  });

  it('should not remove expense if ID not found', () => {
    const action = {
      type: REMOVE_EXPENSE,
      id: 'Brian'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});

describe('get Expense data from database and push to state', () => {
  it('should fetch data from database and update state', () => {
    const action = {
      type: SET_EXPENSESc,
      expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
  });
});