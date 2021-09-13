import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

describe('Generate add expense actions', ()=> {
it('should setup ADD_EXPENSE action object with provided values', () => {
  const expenseData = {
    description:"Newspaper",
    amount:"100",
    note: "Print is dead",
    createdAt: 1000
  }
  
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

it('should setup ADD_EXPENSE object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      createdAt: 0,
      description: "",
      amount: 0,
      note: "",
      id: expect.any(String)
    }
  });
});

});

describe('Generate edit expense actions', () => {

  it('should set up EDIT_EXPENSE action object', () => {
    const action = editExpense('123abc', {
      description: 'Change the description',
      amount: 10000,
      note: 'Change the note'
    });

    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: '123abc',
      updates: {
        description: 'Change the description',
        amount: 10000,
        note: 'Change the note'
      }
    })
  });
});

describe('Generate remove expense actions', () => {
  it('should setup REMOVE_EXPENSE action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      id: '123abc'
    })
  });
});