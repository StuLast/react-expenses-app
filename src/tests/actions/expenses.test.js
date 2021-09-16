import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {ref, get} from 'firebase/database';

import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
 
const createMockStore = configureMockStore([
  thunk
]);

describe('Generate add expense actions', ()=> {
  it('should setup ADD_EXPENSE action object with provided values', () => {
    const expenseData = expenses[3];
    
    const action = addExpense(expenseData);

    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: expenseData
    });
  });
});

describe('Async expense action generators', ()=> {
  it('should add expense to database and store', (done)=> {
    const store = createMockStore({});
    const expenseData = {
      description: "mouse",
      amount: 3000,
      note:"This is a good mouse",
      createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return get(ref(database, `expenses/${actions[0].expense.id}`));
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
    });

  it('should add expense with defaults to database and store', (done)=> {

    const store = createMockStore({});
    const expenseDefault = {
      description: "",
      amount: 0,
      note:"",
      createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefault
        }
      });
      return get(ref(database, `expenses/${actions[0].expense.id}`));
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
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
    });
  });
});